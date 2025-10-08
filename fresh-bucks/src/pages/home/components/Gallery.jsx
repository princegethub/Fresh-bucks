import { useEffect, useState } from "react";
import "../../../styles/globalCss.css";

// data/galleryImages.js
export const galleryImages = [
  {
    id: 1,
    src: "	https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-03.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-04-300x169.jpg",
    span: "row-span-1",
  },
  {
    id: 3,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-05-200x300.jpg",
    span: "row-span-4",
  },
  {
    id: 4,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-06-300x271.jpg",
    span: "row-span-3",
  },
  {
    id: 5,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-01-300x271.jpg",
    span: "row-span-4",
  },
  {
    id: 6,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-02-300x271.jpg",
    span: "row-span-2",
  },
  {
    id: 7,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/gall-03.jpg",
    span: "row-span-2",
  },
];

const heroImages = [
  {
    id: 1,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/text-with-img-01.png",
    alt: "fruit juice",
    className:
      "w-16 h-16 object-cover rounded-xl inline-block align-middle animate-spin-slow",
  },
  {
    id: 2,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/text-with-img-5.png",
    alt: "woman pouring juice",
    className: "w-16 h-16 object-cover rounded-xl inline-block align-middle",
  },
  {
    id: 3,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/text-with-img-3.png",
    alt: "fruit juice",
    className:
      "w-16 h-16 object-cover rounded-xl inline-block align-middle animate-spin-slow",
  },
  {
    id: 4,
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/04/txt-img-dring.png",
    alt: "woman pouring juice",
    className: "w-24 h-12 object-cover rounded-xl inline-block align-middle",
  },
];

export const GallerySection = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  console.log("currentImage", currentImage);
  console.log("lightboxOpen", lightboxOpen);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true for phone screens (<= 768px)
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div
      className="md:h-[1600px] h-auto z-0 bg-[#1e3234]"
      //   style={{ backgroundColor: `var(${theme.bg})` }} // Entire section background
    >
      <div
        className="box_top w-full h-[100px] rotate-180"
        style={{ backgroundColor: `var(${theme.bg})` }}
      />

      <section className="pt-16 md:pt-28 pb-12 md:pb-16 px-4 text-center text-white relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-6xl font-bold flex flex-wrap justify-center items-center gap-4 leading-snug">
            <span>Natural</span>
            <span className="bg-text">Refreshing</span>
            {heroImages.slice(0, 3).map((image, index) => (
              <span key={image.id} className="flex  items-center gap-4">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                />

                {/* Text after the first image */}
                {index === 0 && (
                  <span className="text-2xl md:text-5xl font-bold mt-4 mx-3 md:mt-6">
                    100% Fresh
                  </span>
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-5xl font-bold mt-4 md:mt-6">
            Fruit Juice{" "}
            <span className="hidden sm:inline">
              <img
                src={heroImages[3].src}
                alt={heroImages[3].alt}
                className={heroImages[3].className}
              />
            </span>{" "}
            Without Preservatives
          </h2>
        </div>
      </section>

      {/* Gallery Section */}
      {isMobile ? (
        <main className="grid gap-4 grid-cols-1 max-w-[90%] mx-auto py-12">
          {galleryImages.map(({ id, src }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden cursor-pointer"
              data-aos="zoom-in"
              onClick={() => openLightbox(src)}
            >
              <img
                src={src}
                alt={`Gallery ${id}`}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          ))}
        </main>
      ) : (
        <main className="grid gap-8 grid-cols-3 grid-rows-[repeat(12,_150px)] max-w-[90%] mx-auto py-12">
          {galleryImages.map(({ id, src, span }) => (
            <div
              key={id}
              className={`${span} cursor-pointer`}
              data-aos="zoom-in"
              onClick={() => openLightbox(src)}
            >
              <img
                src={src}
                alt={`Gallery ${id}`}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          ))}
        </main>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0  bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="relative  cursor-pointer h-[80vh] overflow-hidden    bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl flex items-center justify-center transition-all duration-300"
            data-aos="zoom-in"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white cursor-pointer  bg-gray-800 hover:bg-red-600 transition-all duration-300 transform hover:scale-110 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              title="Close"
            >
              &times;
            </button>

            {/* Lightbox Image */}
            <img
              src={currentImage}
              alt="Lightbox"
              className="h-[80vh]  object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
