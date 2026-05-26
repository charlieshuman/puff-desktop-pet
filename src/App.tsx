import { getCurrentWindow } from "@tauri-apps/api/window";

function App() {
  return (
    <div
      onMouseDown={() => getCurrentWindow().startDragging()}
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <div className="wizard-sprite" />
    </div>
  );
}

export default App;