import NavBar from "../componets/NavBar";

export default function HomePage() {
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
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
            Welcome to
            <span className="block text-blue-600">Kulambira</span>
          </h1>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl">
            Experience the perfect blend of innovation and elegance. We create
            beautiful, functional solutions that bring your vision to life.
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
    </div>
  );
}
