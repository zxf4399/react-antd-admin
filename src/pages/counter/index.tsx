import { useAppSelector } from "@/hooks";
import { Button, Row, Typography } from "antd";

const { Text } = Typography;

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <Row>
      <Text>{count}</Text>
      <Button>+</Button>
      <Button>-</Button>
    </Row>
  );
}
