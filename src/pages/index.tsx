import Accueil from "@/components/Accueil";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Kbbot from "@/components/Kbbot";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Home() {
  return (
    <div className={`${poppins.className} max-w-screen overflow-x-hidden`}>
      <Accueil />
      <Services />
      <Kbbot/>
      <Clients />
      <Contact />
    </div>
  );
}
