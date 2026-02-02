
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Maximize2, ShieldCheck } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | {src: string, title: string}>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400?text=Image+Link+Incorrect";
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Institute Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art labs, classrooms, and student events at MIT Mawana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-64 cursor-zoom-in bg-gray-100 flex items-center justify-center"
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={img.title} 
                loading="lazy"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Maximize2 size={20} className="text-white" />
                </div>
                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-[70]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4">
              <img 
                src={selectedImage.src} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
                alt={selectedImage.title} 
                onError={handleImageError}
              />
              <p className="text-white text-2xl font-bold bg-blue-600/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}

        {/* User Tip */}
        <div className="mt-20 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
          <h3 className="text-blue-900 font-bold mb-2">How to add your own photos?</h3>
          <p className="text-blue-800 font-medium italic mb-4">
            "Go to Postimages.org, upload your photo, and copy the link that starts with 'https://i.postimg.cc/...' and ends in '.jpg'"
          </p>
          <div className="flex justify-center gap-4 text-xs">
            {/* Added ShieldCheck to imports to resolve Cannot find name error */}
            <span className="flex items-center text-green-600"><ShieldCheck size={14} className="mr-1"/> Direct Link Works</span>
            <span className="flex items-center text-red-600"><X size={14} className="mr-1"/> Webpage Link Fails</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
