import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminEvent from "./pages/AdminEvent";
import AdminTeam from "./pages/AdminTeam";
import AdminBiopedia from "./pages/AdminBiopedia";
import AdminOpportunities from "./pages/AdminOpportunities";
import AdminBlog from "./pages/AdminBlog";
import AdminNewsletter from "./pages/AdminNewsletter";
import AdminEventCreate from "./pages/AdminEventCreate";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/event" element={<AdminEvent />} />
        <Route path="/admin/team" element={<AdminTeam />} />
        <Route path="/admin/biopedia" element={<AdminBiopedia />} />
        <Route path="/admin/opportunities" element={<AdminOpportunities />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/newsletters" element={<AdminNewsletter />} />
        <Route path="/admin/event/create" element={<AdminEventCreate />} />
      </Routes>
      <Footer />
    </Router>
  );
}
