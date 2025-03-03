"use server";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongo";

export async function GET() {
    try{
        const db = await connectToDB();
        const data = await db.collection("experience").find().toArray();
        if (!data) {
            return NextResponse.json({
                error: "Experience not found"
            }, {
                status: 404
            });
        }
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({
            error: "Failed to get Experience"
        }, {
            status: 500
        });
    }
}