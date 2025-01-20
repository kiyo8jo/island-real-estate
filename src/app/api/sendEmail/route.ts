import Email from "@/email/Email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(res: NextResponse) {
  const { name, tel, email, inquiry } = await res.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MY_ADDRESS!,
      subject: "Hello world",
      react: Email({ name, tel, email, inquiry }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
