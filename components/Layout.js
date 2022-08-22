import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout({ children }) {
  return (
    <div className="grid grid-flow-row min-h-screen">
      <Navbar />
      <Background />
      <main className="py-4">{children}</main>
      <Footer />
    </div>
  );
}
