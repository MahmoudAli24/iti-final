import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import Container from "../UI/Container";
import Heading from "../Heading/Heading";

import img1 from "../../assets/mahmoud/img-1.jpeg";
import img2 from "../../assets/mahmoud/img-2.jpeg";
import img3 from "../../assets/mahmoud/img-3.jpeg";
import img4 from "../../assets/mahmoud/img-4.jpeg";
import img5 from "../../assets/mahmoud/img-5.jpeg";
import img6 from "../../assets/katren/img-5.jpeg";

const cards = [
  {
    title: "CMS",
    img: img1,
    description: "Product Design",
  },
  {
    title: "CMS",
    img: img2,
    description: "UI/UX Design",
  },
  {
    title: "CMS",
    img: img3,
    description: "Digital Marketing",
  },
  {
    title: "CMS",
    img: img4,
    description: "Product Design",
  },
  {
    title: "CMS",
    img: img5,
    description: "UI/UX Design",
  },
  {
    title: "CMS",
    img: img6,
    description: "Digital Marketing",
  },
];

function Cards() {
  return (
    <section>
      <Container>
        <Heading title="Our Services" />
        <div className={styles.cards}>
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                img={card.img}
                description={card.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Cards;
