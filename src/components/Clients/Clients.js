import Heading from "../Heading/Heading";
import Tabs from "../Tabs/Tabs";
import Container from "../UI/Container";
import user1 from "../../assets/users/user-1.jpg";
import user2 from "../../assets/users/user-2.jpg";
import user3 from "../../assets/users/user-3.jpg";
import styles from "./Clients.module.css";

const clients = [
  {
    name: "Leslie Akexander",
    img: user1,
    description: "Themes Programar",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
  },
  {
    name: "Robert Fox",
    img: user2,
    description: "Programar",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
  },
  {
    name: "Ronald Richards",
    img: user3,
    description: "Designer",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
  },
];

function Clients() {
  return (
    <section className={styles["clients"]}>
      <Container>
        <Heading title="Our Clients" />
        <div className={styles["head"]}>
          <p className={styles["head-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id
          </p>
        </div>
      </Container>
      <Tabs data={clients} />
    </section>
  );
}

export default Clients;
