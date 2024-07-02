import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../features/counter/counterSlice.ts";
import { Button, InputNumber } from "@arco-design/web-react";
import { useAppDispatch } from "../hooks/index.ts";
import { useState } from "react";

function Emitter({ className }) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  return (
    <div className={className}>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(count))}>
        incrementByAmount
      </Button>
      <InputNumber value={count} onChange={(v) => setCount(v)} />
      <Button onClick={() => dispatch(incrementAsync(count))}>
        increment async
      </Button>
    </div>
  );
}

export default Emitter;
