import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      console.error("Upload attempt with no file");
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    console.log(`Received upload: ${file.name} (${file.size} bytes, ${file.type})`);

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Sanitize filename or use default if missing
    const originalName = file.name ? file.name.replace(/[^a-zA-Z0-9.-]/g, "_") : "upload.bin";
    const filename = `${Date.now()}_${originalName}`;
    
    // Ensure we are saving to the public folder in the project root
    const uploadDir = path.join(process.cwd(), "public/uploads");
    
    // Ensure directory exists
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);
    console.log(`File saved to: ${filePath}`);
    
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (error: any) {
    console.error("Error saving file:", error);
    return NextResponse.json({ error: `Error saving file: ${error.message}` }, { status: 500 });
  }
}
