import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/Button";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />

      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
