import {
  FiBarChart2,
  FiTrendingUp,
  FiRepeat,
  FiAward,
  FiHeart,
  FiCalendar,
  FiList,
  FiActivity,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Workout Tracking",
    description:
      "Track all your workouts in one place with detailed metrics for sets, reps, and weights to monitor your progress over time.",
    bullets: [
      {
        title: "Exercise Details",
        description:
          "Log each exercise with precise weight, reps, and set information.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Session Overview",
        description:
          "View complete workout summaries including total weight lifted.",
        icon: <FiList size={26} />,
      },
      {
        title: "Analyze Your Progress",
        description:
          "Generate detailed analytics to track your progress over time.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/ExerciseDetailView.png",
  },
  {
    title: "Progress Analytics",
    description:
      "Visualize your fitness journey with detailed charts tracking weight progression and rep counts for each exercise.",
    bullets: [
      {
        title: "Weight Progression",
        description: "Track increasing strength with weight trend analysis.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Rep Tracking",
        description:
          "Monitor endurance improvements with detailed repetition history.",
        icon: <FiRepeat size={26} />,
      },
      {
        title: "Performance Comparison",
        description:
          "Compare current workout stats against previous sessions to measure growth.",
        icon: <FiActivity size={26} />,
      },
    ],
    imageSrc: "/images/AnalyticsView.png",
  },
  {
    title: "Activity Tracking",
    description:
      "Log various fitness activities and exercises to monitor your overall health and wellness.",
    bullets: [
      {
        title: "Activity Calendar",
        description:
          "See your workout schedule at a glance with color-coded calendar view.",
        icon: <FiCalendar size={26} />,
      },
      {
        title: "Fitness Activities",
        description:
          "Log fitness activities like social dance and yoga with duration tracking.",
        icon: <FiHeart size={26} />,
      },
      {
        title: "Various Exercises",
        description: "Track progression for key exercises and activities.",
        icon: <FiAward size={26} />,
      },
    ],
    imageSrc: "/images/ActivityScreen.png",
  },
];
