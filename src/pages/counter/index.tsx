import { useAppSelector } from "@/hooks";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);

  return <div>{count} + 1</div>;
}
