import React from "react";

const Problem = (props: any) => {
  return (
    <div>
      <h1>{props.match.params.id}</h1>
    </div>
  );
};

export default Problem;
