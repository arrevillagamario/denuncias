import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        dui: { label: "Usuario", type: "text", placeholder: "Número de DUI" },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: ".....",
        },
      },

      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: {
            dui: parseInt(credentials.dui),
          },
        });

        if (!userFound) throw new Error("No se encontro el usuario");
        /* console.log(userFound); */

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) throw new Error("La contraseña no coincide");

        return {
          id: userFound.dui,
          name: { first: userFound.nombre, last: userFound.apellido },
          email: userFound.dui,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  /* pages: {
    signIn: "auth/sigin",
  }, */
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
