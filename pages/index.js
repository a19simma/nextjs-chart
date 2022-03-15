import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import Title from "../components/Title.js";
import Background from "../components/Background.js";
import CardContainer from "../components/CardContainer.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Background>
        <Title />
        <CardContainer>
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Background>
      <Footer />
    </div>
  );
}
