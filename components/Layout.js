import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Background>
        <main>{children}</main>
      </Background>
      <Footer />
    </div>
  );
}
