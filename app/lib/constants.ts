export const CONTACT = {
  whatsappNumber: "918169629992",
  instagramHandle: "aartistrystudio",
};

export const waLink = (msg = "Hi Akshada! I'd love to inquire about a piece.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const igLink = `https://instagram.com/${CONTACT.instagramHandle}`;
export const WA = waLink();
export const IG = igLink;
