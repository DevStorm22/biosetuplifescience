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
import AdminEventDelete from "./pages/AdminEventDelete";
import AdminEventUpdate from "./pages/AdminEventUpdate";
import AdminEventView from "./pages/AdminEventView";
import AdminTeammemberCreate from "./pages/AdminTeammemberCreate";
import AdminTeammemberDelete from "./pages/AdminTeammemberDelete";
import AdminTeammemberUpdate from "./pages/AdminTeammemberUpdate";
import AdminTeammemberView from "./pages/AdminTeammemberView";
import AdminBiopediaScientistsketch from "./pages/AdminBiopediaScientistsketch";
import AdminBiopediaScientistsketchPhoto from "./pages/AdminBiopediaScientistsketchPhoto";
import AdminBiopediaScientistsketchPhotoCreate from "./pages/AdminBiopediaScientistsketchPhotoCreate";
import AdminBiopediaScientistsketchPhotoDelete from "./pages/AdminBiopediaScientistsketchPhotoDelete";
import AdminBiopediaScientistsketchPhotoUpdate from "./pages/AdminBiopediaScientistsketchPhotoUpdate";
import AdminBiopediaScientistsketchPhotoView from "./pages/AdminBiopediaScientistsketchPhotoView";
import AdminBiopediaScientistsketchMeme from "./pages/AdminBiopediaScientistsketchMeme";
import AdminBiopediaScientistsketchMemeCreate from "./pages/AdminBiopediaScientistsketchMemeCreate";
import AdminBiopediaScientistsketchMemeDelete from "./pages/AdminBiopediaScientistsketchMemeDelete";
import AdminBiopediaScientistsketchMemeUpdate from "./pages/AdminBiopediaScientistsketchMemeUpdate";
import AdminBiopediaScientistsketchMemeView from "./pages/AdminBiopediaScientistsketchMemeView";
import AdminBiopediaScientistsketchVideo from "./pages/AdminBiopediaScientistsketchVideo";
import AdminBiopediaScientistsketchVideoCreate from "./pages/AdminBiopediaScientistsketchVideoCreate";
import AdminBiopediaScientistsketchVideoDelete from "./pages/AdminBiopediaScientistsketchVideoDelete";
import AdminBiopediaScientistsketchVideoUpdate from "./pages/AdminBiopediaScientistsketchVideoUpdate";
import AdminBiopediaScientistsketchVideoView from "./pages/AdminBiopediaScientistsketchVideoView";
import AdminBiopediaJob from "./pages/AdminBiopediaJob";
import AdminBiopediaJobPharma from "./pages/AdminBiopediaJobPharma";
import AdminBiopediaJobPharmaCreate from "./pages/AdminBiopediaJobPharmaCreate";
import AdminBiopediaJobPharmaDelete from "./pages/AdminBiopediaJobPharmaDelete";
import AdminBiopediaJobPharmaUpdate from "./pages/AdminBiopediaJobPharmaUpdate";
import AdminBiopediaJobPharmaView from "./pages/AdminBiopediaJobPharmaView";
import AdminBiopediaJobPhD from "./pages/AdminBiopediaJobPhD";
import AdminBiopediaJobPhDCreate from "./pages/AdminBiopediaJobPhDCreate";
import AdminBiopediaJobPhDDelete from "./pages/AdminBiopediaJobPhDDelete";
import AdminBiopediaJobPhDUpdate from "./pages/AdminBiopediaJobPhDUpdate";
import AdminBiopediaJobPhDView from "./pages/AdminBiopediaJobPhDView";
import AdminBiopediaJobInternship from "./pages/AdminBiopediaJobInternship";
import AdminBiopediaJobInternshipCreate from "./pages/AdminBiopediaJobInternshipCreate";
import AdminBiopediaJobInternshipDelete from "./pages/AdminBiopediaJobInternshipDelete";
import AdminBiopediaJobInternshipUpdate from "./pages/AdminBiopediaJobInternshipUpdate";
import AdminBiopediaJobInternshipView from "./pages/AdminBiopediaJobInternshipView";
import AdminBiopediaJobFellowship from "./pages/AdminBiopediaJobFellowship";
import AdminBiopediaJobFellowshipCreate from "./pages/AdminBiopediaJobFellowshipCreate";
import AdminBiopediaJobFellowshipDelete from "./pages/AdminBiopediaJobFellowshipDelete";
import AdminBiopediaJobFellowshipUpdate from "./pages/AdminBiopediaJobFellowshipUpdate";
import AdminBiopediaJobFellowshipView from "./pages/AdminBiopediaJobFellowshipView";
import AdminBiopediaJobResearch from "./pages/AdminBiopediaJobResearch";
import AdminBiopediaJobResearchCreate from "./pages/AdminBiopediaJobResearchCreate";
import AdminBiopediaJobResearchDelete from "./pages/AdminBiopediaJobResearchDelete";
import AdminBiopediaJobResearchUpdate from "./pages/AdminBiopediaJobResearchUpdate";
import AdminBiopediaJobResearchView from "./pages/AdminBiopediaJobResearchView";
import AdminBiopediaQuiz from "./pages/AdminBiopediaQuiz";
import AdminBiopediaQuizCreate from "./pages/AdminBiopediaQuizCreate";
import AdminOpportunitiesCreate from "./pages/AdminOpportunitiesCreate";
import AdminOpportunitiesDelete from "./pages/AdminOpportunitiesDelete";
import AdminOpportunitiesUpdate from "./pages/AdminOpportunitiesUpdate";
import AdminOpportunitiesView from "./pages/AdminOpportunitiesView";
import AdminBlogCreate from "./pages/AdminBlogCreate";
import AdminBlogDelete from "./pages/AdminBlogDelete";
import AdminBlogUpdate from "./pages/AdminBlogUpdate";
import AdminBlogView from "./pages/AdminBlogView";
import AdminNewsletterCreate from "./pages/AdminNewsletterCreate";
import AdminNewsletterDelete from "./pages/AdminNewsletterDelete";
import AdminNewsletterUpdate from "./pages/AdminNewsletterUpdate";
import AdminNewsletterView from "./pages/AdminNewsletterView";

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
        <Route path="/admin/event/delete" element={<AdminEventDelete />} />
        <Route path="/admin/event/update" element={<AdminEventUpdate />} />
        <Route path="/admin/event/view" element={<AdminEventView />} />
        <Route path="/admin/team/create" element={<AdminTeammemberCreate />} />
        <Route path="/admin/team/delete" element={<AdminTeammemberDelete />} />
        <Route path="/admin/team/update" element={<AdminTeammemberUpdate />} />
        <Route path="/admin/team/view" element={<AdminTeammemberView />} />
        <Route
          path="/admin/biopedia/scientistsketch"
          element={<AdminBiopediaScientistsketch />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/photo"
          element={<AdminBiopediaScientistsketchPhoto />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/photo/create"
          element={<AdminBiopediaScientistsketchPhotoCreate />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/photo/delete"
          element={<AdminBiopediaScientistsketchPhotoDelete />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/photo/update"
          element={<AdminBiopediaScientistsketchPhotoUpdate />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/photo/view"
          element={<AdminBiopediaScientistsketchPhotoView />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/meme"
          element={<AdminBiopediaScientistsketchMeme />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/meme/create"
          element={<AdminBiopediaScientistsketchMemeCreate />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/meme/delete"
          element={<AdminBiopediaScientistsketchMemeDelete />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/meme/update"
          element={<AdminBiopediaScientistsketchMemeUpdate />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/meme/view"
          element={<AdminBiopediaScientistsketchMemeView />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/video"
          element={<AdminBiopediaScientistsketchVideo />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/video/create"
          element={<AdminBiopediaScientistsketchVideoCreate />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/video/delete"
          element={<AdminBiopediaScientistsketchVideoDelete />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/video/update"
          element={<AdminBiopediaScientistsketchVideoUpdate />}
        />
        <Route
          path="/admin/biopedia/scientistsketch/video/view"
          element={<AdminBiopediaScientistsketchVideoView />}
        />
        <Route path="/admin/biopedia/jobs" element={<AdminBiopediaJob />} />
        <Route
          path="/admin/biopedia/jobs/pharma"
          element={<AdminBiopediaJobPharma />}
        />
        <Route
          path="/admin/biopedia/jobs/pharma/create"
          element={<AdminBiopediaJobPharmaCreate />}
        />
        <Route
          path="/admin/biopedia/jobs/pharma/delete"
          element={<AdminBiopediaJobPharmaDelete />}
        />
        <Route
          path="/admin/biopedia/jobs/pharma/update"
          element={<AdminBiopediaJobPharmaUpdate />}
        />
        <Route
          path="/admin/biopedia/jobs/pharma/view"
          element={<AdminBiopediaJobPharmaView />}
        />
        <Route
          path="/admin/biopedia/jobs/phd"
          element={<AdminBiopediaJobPhD />}
        />
        <Route
          path="/admin/biopedia/jobs/phd/create"
          element={<AdminBiopediaJobPhDCreate />}
        />
        <Route
          path="/admin/biopedia/jobs/phd/delete"
          element={<AdminBiopediaJobPhDDelete />}
        />
        <Route
          path="/admin/biopedia/jobs/phd/update"
          element={<AdminBiopediaJobPhDUpdate />}
        />
        <Route
          path="/admin/biopedia/jobs/phd/view"
          element={<AdminBiopediaJobPhDView />}
        />
        <Route
          path="/admin/biopedia/jobs/internship"
          element={<AdminBiopediaJobInternship />}
        />
        <Route
          path="/admin/biopedia/jobs/internship/create"
          element={<AdminBiopediaJobInternshipCreate />}
        />
        <Route
          path="/admin/biopedia/jobs/internship/delete"
          element={<AdminBiopediaJobInternshipDelete />}
        />
        <Route
          path="/admin/biopedia/jobs/internship/update"
          element={<AdminBiopediaJobInternshipUpdate />}
        />
        <Route
          path="/admin/biopedia/jobs/internship/view"
          element={<AdminBiopediaJobInternshipView />}
        />
        <Route
          path="/admin/biopedia/jobs/fellowship"
          element={<AdminBiopediaJobFellowship />}
        />
        <Route
          path="/admin/biopedia/jobs/fellowship/create"
          element={<AdminBiopediaJobFellowshipCreate />}
        />
        <Route
          path="/admin/biopedia/jobs/fellowship/delete"
          element={<AdminBiopediaJobFellowshipDelete />}
        />
        <Route
          path="/admin/biopedia/jobs/fellowship/update"
          element={<AdminBiopediaJobFellowshipUpdate />}
        />
        <Route
          path="/admin/biopedia/jobs/fellowship/view"
          element={<AdminBiopediaJobFellowshipView />}
        />
        <Route
          path="/admin/biopedia/jobs/research"
          element={<AdminBiopediaJobResearch />}
        />
        <Route
          path="/admin/biopedia/jobs/research/create"
          element={<AdminBiopediaJobResearchCreate />}
        />
        <Route
          path="/admin/biopedia/jobs/research/delete"
          element={<AdminBiopediaJobResearchDelete />}
        />
        <Route
          path="/admin/biopedia/jobs/research/update"
          element={<AdminBiopediaJobResearchUpdate />}
        />
        <Route
          path="/admin/biopedia/jobs/research/view"
          element={<AdminBiopediaJobResearchView />}
        />
        <Route path="/admin/biopedia/quiz" element={<AdminBiopediaQuiz />} />
        <Route
          path="/admin/biopedia/quiz/create"
          element={<AdminBiopediaQuizCreate />}
        />
        <Route
          path="/admin/opportunities/create"
          element={<AdminOpportunitiesCreate />}
        />
        <Route
          path="/admin/opportunities/delete"
          element={<AdminOpportunitiesDelete />}
        />
        <Route
          path="/admin/opportunities/update"
          element={<AdminOpportunitiesUpdate />}
        />
        <Route
          path="/admin/opportunities/view"
          element={<AdminOpportunitiesView />}
        />
        <Route path="/admin/blog/create" element={<AdminBlogCreate />} />
        <Route path="/admin/blog/delete" element={<AdminBlogDelete />} />
        <Route path="/admin/blog/update" element={<AdminBlogUpdate />} />
        <Route path="/admin/blog/view" element={<AdminBlogView />} />
        <Route
          path="/admin/newsletters/create"
          element={<AdminNewsletterCreate />}
        />
        <Route
          path="/admin/newsletters/delete"
          element={<AdminNewsletterDelete />}
        />
        <Route
          path="/admin/newsletters/update"
          element={<AdminNewsletterUpdate />}
        />
        <Route
          path="/admin/newsletters/view"
          element={<AdminNewsletterView />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
