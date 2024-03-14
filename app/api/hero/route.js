import dbConnector from "@/libs/dbConnector";
import { NextResponse } from "next/server";
import heroModel from "@/models/hero.model";


export async function GET() {
    try {
        await dbConnector()
        const data = await heroModel.findOne()
        return NextResponse.json(data)
    } catch (err) {
        throw err
    }
}