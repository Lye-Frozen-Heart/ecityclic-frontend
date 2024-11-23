import { AppRouter } from "../../routers/AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const AppProvider = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};
export default AppProvider;
