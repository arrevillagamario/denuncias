import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { user, municipio, descripcion, direccion, estado } =
      await request.json();

    console.log("user:", user);
    console.log("id_municipio:", municipio);

    const newDenuncia = await prisma.denuncias.create({
      data: {
        user: { connect: { dui: parseInt(user.dui) } },
        municipio: { connect: { id: parseInt(municipio) } },
        fecha: new Date(),
        descripcion,
        direccion,
        estado,
      },
    });

    return NextResponse.json({
      message: "Denuncia realizada con éxito",
      denuncia: newDenuncia,
    });
  } catch (error) {
    console.error("Error al procesar la denuncia:", error);

    return NextResponse.json(
      {
        message: "Hubo un error al procesar la solicitud POST al servidor",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
