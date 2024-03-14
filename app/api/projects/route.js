import dbConnector from "@/libs/dbConnector";
import { NextResponse } from "next/server";
import projectModel from "@/models/project.model";


export async function GET() {
    try {
        await dbConnector()
        const data = await projectModel.find()
        return NextResponse.json(data)
    } catch (err) {
        throw err
    }
}


export async function POST(req) {
    try {
        await dbConnector()
        // const data = await projectModel.create({})
        const data = await req.formData()
        const file = data.get('image')
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        return NextResponse.json(buffer)
    } catch (err) { 
        throw err
    }
}