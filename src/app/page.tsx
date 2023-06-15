import { Inter } from "next/font/google";
import { Calendar } from "@/components/ui/calendar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Calendar />;
}
