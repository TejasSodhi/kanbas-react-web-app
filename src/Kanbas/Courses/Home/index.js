import ModuleList from "../Modules/ModuleList";
import CourseHeader from '../CourseHeader';
import CourseStatus from "../CourseStatus";

function Home() {
  return (
    <div className="wd-home">
      <div className="d-flex col-10">
        <div className="w-75">
        <CourseHeader />
        <hr />
          <ModuleList />
        </div>
        <div className="wd-course-status">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
export default Home;
