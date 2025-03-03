import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering businesses with cutting-edge financial technology solutions.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
  ],
  email: "varunkollipara11@gmail.com",
  telephone: "+1 612-223-1809",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com",
  },
};
