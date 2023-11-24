import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    console.log("params: ", params);
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { error: "Proporciona un numero de trcking" },
        { status: 400 }
      );
    }

    const denuncia = await prisma.denuncias.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: {
        user: true,
        municipio: true,
      },
    });

    console.log("denuncia:", denuncia);

    if (!denuncia) {
      console.log("No se encontró la denuncia");
      return NextResponse.json(
        { error: "No se encontro la denuncia" },
        { status: 404 }
      );
    }

    console.log("Respondiendo con denuncia:", denuncia);
    return NextResponse.json(denuncia);
  } catch (error) {
    console.error("Error al procesar la solicitud GET", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
