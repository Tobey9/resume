import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading">
      <Image src="/loading.svg" alt="Loading..." width={200} height={200} />
    </div>
  );
}
