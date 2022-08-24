import { useEffect, memo, useRef } from "react";

//let counter = 0;
const Child = () => {
  let counter = useRef(0);
  useEffect(() => {
    counter.current++;
  });
  return (
    <div className="child-container">
      <div className="child-title">
        {" "}
        I am child component, I am not getting re-rendered
      </div>
      <div className="child-counter">{counter.current}</div>
    </div>
  );
};

export default memo(Child);
