// import Emitter from "./pages/emitter.tsx";
// import Listener from "./pages/listener.tsx";
import Article from "./pages/artical";
import AddPostForm from "./pages/addPostForm.tsx";
import style from "./styles/App.module.less";

function App() {
  return (
    <div className={style.container}>
      {/* <Emitter className={"area"} /> */}
      {/* <Listener className={"area"} /> */}
      <AddPostForm className={"area"} />
      <Article className={"area"} />
    </div>
  );
}

export default App;
