import { memo } from "react";
import ReactMarkdown from "react-markdown";
import md from "./index.md";

const MacOS = () => {
  return <ReactMarkdown>{md}</ReactMarkdown>;
};

export default memo(MacOS);
