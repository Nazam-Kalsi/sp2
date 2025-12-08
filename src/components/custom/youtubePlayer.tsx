"use client";

import { useState } from "react";
import Image from "next/image";
import { Bowlby_One_SC } from "next/font/google";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const videoData = [
  {
    id: "ZUfmumfhirw",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=ZUfmumfhirw"
  },
  {
    id: "RHS5cxgSyrk",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=RHS5cxgSyrk"
  },
  {
    id: "PfNXsp_66HM",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=PfNXsp_66HM"
  },
  {
    id: "Ggp2pK3jKYY",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=Ggp2pK3jKYY"
  },
  {
    id: "7O74Y1AHtDI",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=7O74Y1AHtDI"
  },
 
];


 function ExpandableYouTubePlayerCard({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&mute=0`;

  return (
    // text-[#432323] dark:text-[#FFFD8F]
    <>
      {/* Thumbnail Card */}
      <div
        className="w-full max-w-sm cursor-pointer rounded-xl overflow-hidden hover:scale-[1.02] transition-transform flex items-center justify-center bg-[#432323] dark:bg-[#FFFD8F] hover:shadow-xl p-2 mx-2"
        onClick={() => setOpen(true)}
      >
                 
          <Image
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            width={480}
            height={360}
            alt="thumbnail"            
            className="w-full object-cover h-48 rounded-md"
          />
        
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-background animate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="450"
              src={embedUrl}
              title="YouTube video"
              className="rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

const YoutubeVideos: React.FC = () => {
  return (
    <section id='youtube' className='space-y-2 pt-16 px-4'>
      <h1 className={`text-center text-3xl sm:text-4xl md:text-5xl font-bold  p-4  text-[#432323] dark:text-[#FFFD8F] text-shadow-lg ${bowlby.className}`}>Youtube Videos</h1>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {videoData.map((v,i)=>{
          return(
            <ExpandableYouTubePlayerCard id={v.id} key={i}/>
          )
        })}
      </div>
    </section>
  );
};

export default YoutubeVideos;
