import Image from "next/image";
import '../app/styles/index.scss'
import GoogleMap from "../app/components/GoogleMap";
import Gallery from "@/app/components/Gallery";
import DOP from "@/app/components/DOP";
import ContactUs from "@/app/components/Forms/ContactForm";
import NavBar from "./components/NavBar";

const Home = () => {

  const galleryItems = [
    {image:'/mountain3.jpg', title: 'Eye1', description: 'Close up of a blue eye'  },
    {image:'/mountain2.jpg', title: 'Moutain', description: 'View of Mountain'  },
    {image:'/mountain1.jpg', title: 'Moutain', description: 'View of zion'  },
  ]
  // only files in app have access to server-side environment variables
  // for that reason we must pass the .env.local keys as props from here
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID
  }

  return (
    <>
    <header><NavBar /></header>
    <main className="main">  
      <Gallery items={galleryItems} />
      <section id="googlemap"><GoogleMap {...props}/></section>
      <section id="dop"><DOP /></section> 
      <section id="contact"><ContactUs /></section>
    </main>
    </>
  );
}

export default Home;
