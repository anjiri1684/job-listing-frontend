import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import { JobPage, jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  const deleteJob = async (id) => {
    const responce = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (!responce.ok) {
      throw new Error("Failed to delete Job");
    }

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/job/:id" element={<JobPage />} loader={jobLoader} />
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route
          path="/job/edit/:id"
          element={<EditJobPage />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
