import TestRenderer from "react-test-renderer";

import PageIndex from "../";

const testRenderer = TestRenderer.create(<PageIndex />);

expect(testRenderer.toJSON()).toMatchSnapshot();

describe("<PageIndex />", () => {
  it("渲染快照", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it("children 是首页", () => {
    expect(testRenderer.root.findByType("div").children[0]).toBe("首页");
  });
});
