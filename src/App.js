import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import PendingScreen from "./screens/PendingScreen";
import ReportScreen from "./screens/ReportScreen";
import StockScreen from "./screens/StockScreen";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/pending" component={PendingScreen} />
          <Route path="/stocks" component={StockScreen} />
          <Route path="/reports" component={ReportScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}
