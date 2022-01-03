import { useMount } from "ahooks";
import { useState } from "react";

const MemoryLeak = () => {
  const [state, setState] = useState<{ name: string }[]>([]);

  useMount(() => {
    setInterval(() => {
      setState((state) => state.concat({ name: "zxf4399" }));
    }, 1000);
  });

  return <div>{JSON.stringify(state)} </div>;
};

export default MemoryLeak;
