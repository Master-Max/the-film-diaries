import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        className="fixed inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      <h1
        className={`${greatVibes.className} pointer-events-none absolute inset-0 flex items-center justify-center text-center text-6xl text-white drop-shadow-lg sm:text-8xl`}
      >
        The Film Diaries
      </h1>
    </div>
  );
}
