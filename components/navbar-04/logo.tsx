import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo_icon_left.svg"
    alt="Vowels"
    width={124}
    height={32}
    className="fill-foreground"
    style={{ width: '124px', height: '32px' }}
    priority
  />
);
