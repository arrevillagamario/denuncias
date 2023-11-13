/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Denuncias" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_municipio" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "dui" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("dui")
);

-- CreateTable
CREATE TABLE "Municipio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Denuncias_id_key" ON "Denuncias"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_dui_key" ON "User"("dui");

-- CreateIndex
CREATE UNIQUE INDEX "Municipio_id_key" ON "Municipio"("id");

-- AddForeignKey
ALTER TABLE "Denuncias" ADD CONSTRAINT "Denuncias_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("dui") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Denuncias" ADD CONSTRAINT "Denuncias_id_municipio_fkey" FOREIGN KEY ("id_municipio") REFERENCES "Municipio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
