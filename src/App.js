import "./index.css";
import Colorbox from "./components/Colorbox";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <Colorbox />
    </div>
  );
}

export default App;
