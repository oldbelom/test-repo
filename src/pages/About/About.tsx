import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about page-indent">
      <h1>О проекте</h1>
      <p>
        В проекте настроено использование параметризированного роутинга. Если на
        главной странице с поиском фильмов в url после двоеточя указать название
        фильма /:брат2, то название появится в инпуте для поиска.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate ab
        atque autem obcaecati fugiat magnam voluptatum doloremque natus
        quibusdam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate ab
        atque autem obcaecati fugiat magnam voluptatum doloremque natus
        quibusdam?
      </p>
    </div>
  );
}
