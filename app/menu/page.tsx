import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "The Menu",
  description: "Hot dogs, craft beer, sides and sweets. View the full Chumley's Doghouse menu.",
};

export default function MenuPage() {
  return <MenuClient />;
}
