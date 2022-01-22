import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Background from "../components/Background.js";
import Card from "../components/Card.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 ">
        <h1 className="text-zinc-200 text-center min-h-1/3 h-32 p-10 text-2xl">
          Welcome to my website
        </h1>
        <div className="container mx-auto columns-3 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
