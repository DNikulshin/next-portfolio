import {NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";
import {Prisma} from ".prisma/client";


export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(req){
    try {
        const data = await req.json()
        const {id, fullName, email} = await prisma.user.create({data})
        return NextResponse.json({id, fullName, email})
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
               return NextResponse.json('Пользователь с данным email уже существует!')
            }
        }
        throw e
    }
}

