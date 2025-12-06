import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import HeroSection from "@/components/custom/heroSec";
import Products from "@/components/custom/products";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import YoutubeVideos from "@/components/custom/youtubePlayer";
export default function Home() {
  return (
   <main className="relative">
     <Header/>
     <HeroSection/>
     <Products/>
     <About/>
     <YoutubeVideos/>
     <Contact/>
     <Footer/>
   </main>
  );
}
