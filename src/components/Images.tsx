import Image from "next/image";

type ImagePropType = {
  src: string;
  alt?: string;
  className?: string;
};

export default function Images({ src, alt, className }: ImagePropType) {
  return (
    <Image
      src={src ?? "/"}
      alt={alt ?? "Image Loading"}
      className={className}
      height={100}
      width={100}
      loading="lazy"
    />
  );
}
