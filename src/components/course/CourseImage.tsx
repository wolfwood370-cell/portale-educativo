import { useState } from "react";
import { ImageIcon, Info } from "lucide-react";

interface CourseImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const CourseImage = ({ src, alt, caption }: CourseImageProps) => {
  const [error, setError] = useState(false);

  return (
    <div className="my-10 bg-card p-4 rounded-xl border border-sky-500/20 shadow-sm">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full bg-sky-500/5 border-2 border-dashed border-sky-500/30 rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[250px]">
          <ImageIcon className="w-12 h-12 text-sky-500 mb-3" />
          <p className="text-foreground font-medium">Immagine mancante: {src}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Placeholder visualizzato perché il file non è disponibile in questo ambiente.
          </p>
        </div>
      )}
      {caption && (
        <div className="flex items-center justify-center mt-3 space-x-2">
          <Info className="w-4 h-4 text-sky-500" />
          <p className="text-sm font-medium text-muted-foreground">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default CourseImage;
