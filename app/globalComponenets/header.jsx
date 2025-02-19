import "@/public/css/style.css";
import "@fontsource/montserrat";
import "bootstrap/dist/css/bootstrap.css";
import MainLogo from "@/public/images/mainLogo.webp";
import alignR from "@/public/images/align.svg";
import HeaderS from "./headerstructure";
export default function Header() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      <header class="px-4 py-3">
        <div class="container-fluid" bis_skin_checked="1">
          <HeaderS />
        </div>
      </header>
    </>
  );
}
