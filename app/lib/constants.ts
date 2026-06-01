export const CONTACT = {
  whatsappNumber: "919999999999",
  email: "hello@aartistrystudio.com",
  instagramHandle: "aartistrystudio",
};

export const waLink = (msg = "Hi Akshada! I'd love to inquire about a piece.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const igLink = `https://instagram.com/${CONTACT.instagramHandle}`;
export const mailLink = `mailto:${CONTACT.email}?subject=Commission%20Inquiry`;

export const WA = waLink();
export const IG = igLink;
