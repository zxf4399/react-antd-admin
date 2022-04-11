import { Button, Typography } from "antd";

import { useAppDispatch, useAppSelector } from "@/hooks";

import counterSlice from "./slice";

const { Paragraph } = Typography;

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Paragraph>Count: {count}</Paragraph>
      <Button
        onClick={() => dispatch(counterSlice.actions.increment())}
        size="small"
      >
        +
      </Button>
      <Button
        onClick={() => dispatch(counterSlice.actions.decrement())}
        size="small"
      >
        -
      </Button>
    </>
  );
}
