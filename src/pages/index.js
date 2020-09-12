/** Core imports */
import React from "react";

/** Layouts imports */

/** Material UI imports */
import Container from "@material-ui/core/Container";

/** Components imports */

/** Services imports */
import { getNavigationMenuList } from '../services/menu';

/** Contents imports */
import { attributes, react as HomeContent } from "../../contents/home.md";

export default function Home(props)  {
  let { title, cats } = attributes;
  return (
    <Container>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
        <div id="our-stories">It works</div>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  return {
    props: {
      menus
    }
  }
}