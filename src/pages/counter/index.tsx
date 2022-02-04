import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button, Row, Typography } from "antd";
import { decrement, increment } from "./slice";

const { Paragraph } = Typography;

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Paragraph>{count}</Paragraph>
      <Button
        onClick={() => dispatch(increment())}
        size="small"
        style={{ marginRight: 10 }}
      >
        +
      </Button>
      <Button onClick={() => dispatch(decrement())} size="small">
        -
      </Button>
    </>
  );
}
