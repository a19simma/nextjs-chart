import Body from "../components/Body";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function About() {
  return (
    <Layout>
      <Title>About Me</Title>
      <Body>
        <p>
          My name is Simon and I am a newly graduated software developer with a
          BSc in Computer Science from the University of Skövde, Sweden. For the
          thesis, me and two fellow students explored the effects on
          hyperparameter optimization on an agent in vizdoom (a doom Machine
          Learning library) using a framework called optuna. More of my projects
          can be found on github and maybe above as live demos.
        </p>
        <br></br>
        <p>
          During freetime I enjoy reading fiction books like Earthsea Cycle,
          Dune, Wheel of Time and anything by Brandon Sanderson. I love
          simulation games like Factorio, Satisfactory and Oxygen not Included
          for solo and League of Legends or Age of Empire when playing with
          friends.
        </p>
        <br></br>
        <a
          className="font-semibold text-blue-300"
          href="https://www.linkedin.com/in/simon-malm-468a78230"
        >
          Linkedin
        </a>
        <a
          className="font-semibold text-green-300 right-1 pr-2 absolute"
          href="https://github.com/a19simma/"
        >
          Github
        </a>
      </Body>
    </Layout>
  );
}
