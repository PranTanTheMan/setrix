import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering your fitness journey with cutting-edge workout tracking solutions.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy.pdf",
    },
  ],
  email: "setrixapp@gmail.com",
  telephone: "+1 612-223-1809",
  socials: {
    twitter: "https://x.com/PranTanTheMan",
    instagram: "https://www.instagram.com/itsyaboipranith",
  },
};
