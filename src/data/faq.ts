import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} suitable for beginners?`,
    answer:
      "Absolutely! Whether you're new to fitness tracking or an experienced athlete, our app is designed to be intuitive and easy to use. We provide helpful tutorials and exercise guides to get you started.",
  },
  {
    question: `How does ${siteDetails.siteName} track my workouts?`,
    answer:
      "You can log your exercises, sets, reps, and weights for each workout session. The app automatically generates progress charts and analytics to help you visualize your improvements over time.",
  },
  {
    question: "Can I create custom workout routines?",
    answer:
      "Yes! You can create and save your own workout routines, or use our pre-made templates. You can easily modify exercises, sets, and reps to match your fitness goals.",
  },
  {
    question: "What types of analytics does the app provide?",
    answer:
      "We provide detailed analytics including weight progression charts, volume tracking, personal records, and exercise frequency. You can track improvements in strength, endurance, and overall workout consistency.",
  },
  {
    question: "Is my fitness data secure?",
    answer:
      "We take data security seriously. All your personal information and workout data is stored on your device. We do not collect any data from your device.",
  },
  {
    question: "What if I need help using the app?",
    answer:
      "Our support team is readily available via email to help with any questions. We also provide comprehensive in-app guides and tutorials to help you make the most of all features.",
  },
];
