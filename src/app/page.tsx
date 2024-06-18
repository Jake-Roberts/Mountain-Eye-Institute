import Image from "next/image";
import '../styles/index.css'
import Gallery from "@/components/Gallery";
import DOP from "@/components/DOP";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const Home = () => {

  const galleryItems = [
    {image:'/gallery/mountain6.webp', title: 'Mountain', description: 'A mountain for sure'  },
    {image:'/gallery/mountain5.webp', title: 'Mountain', description: 'A mountain for sure'  },
    {image:'/gallery/mountain4.webp', title: 'Mountain', description: 'A very nice mountain'  },
    {image:'/gallery/mountain3.webp', title: 'Mountain', description: 'Close up of a blue eye'  },
    {image:'/gallery/mountain2.webp', title: 'Mountain', description: 'View of Mountain'  },
    {image:'/gallery/mountain1.webp', title: 'Mountain', description: 'View of zion'  },
  ]

  return (
    <main className="main">
      <TopNav />
      <Gallery items={galleryItems} />
      <DOP />
      <ContactCTA />
      <Footer />
    </main>
  );
}

export default Home;