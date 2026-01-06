"use client";

interface IconCardProps {
    src: string;
    alt: string;
}

const IconCard = ({ src, alt }: IconCardProps) => {
    return (
        <div
            className="
        group
        flex h-14 w-14
        items-center justify-center
        transition-transform duration-300 ease-out
        hover:-translate-y-1
      "
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="
          h-7 w-7
          opacity-80
          transition-transform duration-300 ease-out
          group-hover:scale-105
          group-hover:opacity-100
        "
            />
        </div>
    );
};

export default IconCard;
