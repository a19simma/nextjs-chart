import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

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
