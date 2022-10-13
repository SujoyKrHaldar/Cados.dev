import Image from "next/image";
import { useState } from "react";

function Img({
  src,
  alt,
  className = " ",
  position,
  objectFit,
  layout,
  width,
  height,
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        objectFit={objectFit || "cover"}
        objectPosition={position || "center"}
        layout={layout || "fill"}
        width={width}
        height={height}
        loading="lazy"
        className={`${className} duration-1000
              ${isLoading ? "opacity-0" : " scale-100 "}`}
        onLoadingComplete={() => setLoading(false)}
        onDragStart={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
}

export default Img;
