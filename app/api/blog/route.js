import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET(request) {
  return NextResponse.json({
    msg: "hell",
  });
}
