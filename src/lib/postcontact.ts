// lib/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  note: string;
}

export async function postContactForm(data: ContactFormData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact-form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Form submission failed');
  }

  const result = await res.json();
  return result.data; // { name, email, subject, note }
}
