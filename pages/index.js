import Title from "../components/Title";
import Body from "../components/Body";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Title>Welcome</Title>
      <Body>
        <p>
          This is my personal website where I will showcase demos of projects
          I&apos;ve made. Have a look at the chart page above to see my charting
          component made using html5 canvas.
        </p>
      </Body>
    </Layout>
  );
}
