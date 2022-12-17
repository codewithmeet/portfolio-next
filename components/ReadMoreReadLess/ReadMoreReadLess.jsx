import React, { useState } from "react";

export const ReadMoreReadLess = ({ children, ...props }) => {
  const [wantToReadMore, setWantToReadmore] = useState(false);
  const shortText =
    children
      .substr(0, props.limit)
      .replace(/[\s\n]+$/, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/, "") +
    (props.limit >= children.length ? "" : "…");
  const toggleWantToReadMore = () => setWantToReadmore((prev) => !prev);

  return (
    <p>
      {wantToReadMore ? children : shortText}
      <span style={{}}>
        <a
          style={{ color: "#fc5158", cursor: "pointer", whiteSpace: "nowrap" }}
          type="button"
          onClick={toggleWantToReadMore}
        >
          {wantToReadMore ? "Read less ▲" : "Read more ▼"}
        </a>
      </span>
    </p>
  );
};
