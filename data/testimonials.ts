export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

// Add real testimonials only. The Testimonials section stays hidden while this is empty.
export const testimonials: Testimonial[] = [];
