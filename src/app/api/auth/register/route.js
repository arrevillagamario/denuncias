import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";

export async function POST(request) {
  const data = await request.json();

  const userFound = await prisma.user.findUnique({
    where: {
      dui: parseInt(data.dui),
    },
  });

  if (userFound) {
    return NextResponse.json(
      {
        message: "Este DUI ya ha sido registrado",
      },
      {
        status: 400,
      }
    );
  }
  console.log(data);

  const hashPassword = await bcrypt.hash(data.password, 10);

  const newUser = await prisma.user.create({
    data: {
      dui: parseInt(data.dui),
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: hashPassword,
    },
  });
  return NextResponse.json(newUser);
}

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}
