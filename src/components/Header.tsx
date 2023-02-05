import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">0hhanum</Link>
        </li>
        <li>
          <Link to="https://github.com/0hhanum">Github</Link>
        </li>
      </ul>
    </nav>
  );
}
