import type { Metadata } from "next";
import Home from "./home/page";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  alternates: {
    canonical: "https://alfirma.com/",
  },
};

export default function IndexPage() {
  return <Home />;
}
