import MainLayout from "./components/layout/MainLayout.jsx";
import TodayPage from"./pages/TodayPage.jsx";
import "./styles/main.scss";

function App() {


  return (
    <MainLayout>
      <TodayPage />
    </MainLayout>
  );
}

export default App;
