import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, phone, email, occasion, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Ethnics Enquiry <aravinth.muruganantham@interasoul.com>",
      to: ["ethnicsbynextgeneration@gmail.com"],
      replyTo: email,
      subject: `Enquiry from ${name} — ${occasion}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fcf9ed; color: #303326;">
          <h2 style="font-size: 24px; margin-bottom: 24px; border-bottom: 1px solid #BA9460; padding-bottom: 12px;">
            New Enquiry — Ethnics by Next Generation
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #BA9460; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #BA9460; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #BA9460; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #BA9460; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Occasion</td><td style="padding: 8px 0;">${occasion}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f1eee2; border-left: 3px solid #BA9460;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #BA9460; margin: 0 0 8px;">Message</p>
            <p style="margin: 0; line-height: 1.7;">${message || "—"}</p>
          </div>
        </div>
      `,
    });

    if (error) return Response.json({ error }, { status: 400 });
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}