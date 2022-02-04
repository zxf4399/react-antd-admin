import { Button } from "antd";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Button type="link">
      <Link to="/counter">Counter</Link>
    </Button>
  );
};

export default Index;
