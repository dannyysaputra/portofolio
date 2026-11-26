// WhatsApp link in the form https://wa.me/<country code><number> (digits only, no "+").
// Number taken from the public CV (public/Danny_Suggi_Saputra_CV.pdf).
export const WHATSAPP_URL = "https://wa.me/6289531519787";

export const WHATSAPP_PREFILL = "Hi Danny, I'd like to talk about a project.";

export const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`;
