import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout({ children }) {
  return (
    <div className="absolute min-w-full min-h-full">
      <Background>
        <main>{children}</main>
      </Background>
      <Navbar />
      <Footer />
    </div>
  );
}
