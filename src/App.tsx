import Emitter from "./pages/emitter.tsx";
import Listener from "./pages/listener.tsx";
import style from "./styles/App.module.less";
function App() {
  return (
    <div className={style.container}>
      <Emitter className={"area"} />
      <Listener className={"area"} />
    </div>
  );
}

export default App;
