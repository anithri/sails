import React from "react";
import cx from "classnames";
import styles from "./styles.module.css";
import paletteData from "../../../src/styles/masterPaletteData";
import colorWheel from "./rgbwheel.png"

const Palette = ({ className, forGroup }) => {
  const swatches = Object.values(paletteData).filter(
    ({ group }) => group === forGroup
  );
  let cols = Math.max(Math.ceil(Math.sqrt(swatches.length)), 4);
  return (
    <article className={cx(className, styles.palette, styles[`cols${cols}`])}>
      <ul>
        {swatches.map(({ name, text }) => (
          <li
            className={`bg-${name}`}
            key={`all-colors-${name}`}
            style={{ color: text }}
          >
            {name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Palette;
