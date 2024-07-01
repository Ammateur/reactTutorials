import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice.ts";
import reducers from "../features/counter/counterSlice.ts";
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
      <Button onClick={() => console.log(increment())}>test</Button>
      <Button onClick={() => console.log(reducers)}>test2</Button>
    </div>
  );
}

export default Emitter;
