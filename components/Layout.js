import Navbar from "../components/Navbar";
import Link from "../components/Link";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function Layout({ children }) {
  return (
    <div className="-m-2">
      <Navbar />
      <Background>
        <main>{children}</main>
      </Background>
      <Footer />
    </div>
  );
}
