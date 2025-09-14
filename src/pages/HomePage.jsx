import { useEffect, useRef } from "react";
import NavBar from "../componets/NavBar";

export default function HomePage() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen w-full bg-white relative">
        {/* Emerald Glow Background */}
        <div
          className="absolute inset-0 z-1"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        />

        {/* Hero Section */}
        <div className="relative z-10 pt-20 px-8 flex flex-col items-center justify-center min-h-screen text-center">
          <div className="text-sm font-bold text-blue-900 mb-6 leading-tight  border-black-200/20 shadow-lg bg-white px-4 py-4 rounded-full">
            Welcome to kulambira session
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
            <span className="block text-blue-600">Kulambira</span>
            session
          </h1>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl">
            Discover the harmonious blend of gospel and worship music, crafted
            to inspire and uplift. Join us as we proclaim the good news through
            powerful melodies and heartfelt praise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Explore Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Second Section with Background Image */}
      <div className="min-h-screen w-full relative overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 z-1 parallax-bg"
          style={{
            backgroundImage: `url('/background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-2 bg-black/30" />

        {/* Content for second section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Experience the power of worship and fellowship as we come together
            to celebrate our faith through music and community.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
}
