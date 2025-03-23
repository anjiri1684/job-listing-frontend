import Card from "./Card";
import CardContent from "./CardContent";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <CardContent
                linkLocation="/jobs"
                title="For Developers"
                content="Browse our React jobs and start your career today"
                linkText="Browse Jobs"
              />
            </Card>
            <Card bg="bg-indigo-100">
              <CardContent
                linkLocation="/add-job"
                title="For Employers"
                content="List your job to find the perfect developer for the role"
                linkText="Add Job"
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
