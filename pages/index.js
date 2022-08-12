import Title from "../components/Title";
import Body from "../components/Body";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Title>Welcome</Title>
      <Body title="Hello There">This is the main body of the page.</Body>
    </Layout>
  );
}
