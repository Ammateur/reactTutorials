import { useAppSelector } from "../hooks/index.ts";

const Listener = ({ className }) => {
  const count = useAppSelector((state) => state.counter.value);
  return <div className={className}>{count}</div>;
};
export default Listener;
