
import matter from "gray-matter";
import fs from "fs";

export const getTestimonialDetails = () => {
  const testimonialsFileUrl = `contents/settings/testimonails.md`;
  let testimonialMarkdown = null;
  try {
    testimonialMarkdown = fs.readFileSync(`${testimonialsFileUrl}`).toString();
    const { data: { customerTestimonials = [] } } = matter(testimonialMarkdown);
    return customerTestimonials;
  }
  catch(error) {
    console.log("**** Error: No testimonial data available *****");
  }
  return [];
};