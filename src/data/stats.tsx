import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "1M+",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Workouts logged by users, providing real-time insights.",
  },
  {
    title: "5.0",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Star rating, consistently maintained across app stores.",
  },
  {
    title: "5K+ ",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Users who have used the app to achieve their goals.",
  },
];
