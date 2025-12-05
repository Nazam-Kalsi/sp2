"use client";

import { useState } from "react";
import Image from "next/image";
import { Titan_One } from "next/font/google";

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const videoData = [
  {
    id: "pybdNqriW3U",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=pybdNqriW3U"
  },
  {
    id: "W130SEPoLw0",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=W130SEPoLw0"
  },
  {
    id: "r4HBgmrbCR8",
    title: "Justin Bieber - Sorry",
    thumbnail: "https://www.youtube.com/watch?v=r4HBgmrbCR8"
  },
  {
    id: "dOA4-EREHyg",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=dOA4-EREHyg"
  },
  {
    id: "xwoH98hA43k",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=xwoH98hA43k"
  },
  {
    id: "rBVn65lY4xQ",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=rBVn65lY4xQ"
  },
  {
    id: "OZLsgAtDDrw",
    title: "",
    thumbnail: "https://www.youtube.com/watch?v=OZLsgAtDDrw"
  }
];


 function ExpandableYouTubePlayerCard({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&mute=0`;

  return (
    <>
      {/* Thumbnail Card */}
      <div
        className="w-full max-w-sm cursor-pointer rounded-xl overflow-hidden hover:scale-[1.02] transition-transform flex items-center justify-center bg-linear-to-b from-[#63A361] dark:from-violet-700 to-transparent hover:shadow-xl p-3 mx-2"
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
    <section id='youtube' className='space-y-2 py-16 bg-linear-to-b from-white to-[#63A361] dark:to-transparent dark:from-transparent'>
      <h1 className={`text-center text-3xl sm:text-4xl md:text-5xl font-bold  p-4  text-[#63A361] dark:text-violet-700 text-shadow-lg ${titan.className}`}>Youtube Videos</h1>
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
