import AppRouter from "./router/AppRouter";

// Import global styles
import "./styles/main.scss";

// Root application component.
// Later we can render additional pages, but for now we render only the TodayPage.
function App() {
  return (
    <AppRouter />
  );
}

export default App;
