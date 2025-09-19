import Intropage from "@/Componenets/Introapage/Intropage";
import StartPage from "@/Componenets/StartPage/StartPage";
import WelcomePage from "@/Componenets/WelcomePage/WelcomePage";
import Image from "next/image";


const pages = [
  <Intropage key="intro" />,
  <WelcomePage key="welcome" />,
];

export default function Home() {
  return (
    <>
      <StartPage />
    </>
  );
}
