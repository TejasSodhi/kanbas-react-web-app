import "./index.css";
import { FiCalendar } from 'react-icons/fi';

function CourseStatus() {
  return (
    <div class="wd-flex-course-status">
      Course Status
      <div class="wd-course-status-buttons">
          <button class="btn wd-bg-lightgray">Unpublish</button>
          <button class="btn btn-success">Published</button>
      </div>
      <br />
      <div>
        <button class="btn wd-bg-lightgray mt-2">Import Existing Content</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">Import from Commons</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">Choose Home Page</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">View Course Stream</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">New Announcement</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">New Analytics</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">View Course Notifications</button>
        <br />
      </div>
      <div class="col-8">
      Coming Up<span class="wd-check-ellipse-button-float-end float-end"><FiCalendar color="red" />View Calendar</span>
      <ul>
          <li><a class="course-link" href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
          <li><a class="course-link" href="#">Lecture CS4550.12631.202410 Sep 11 att 11:45am</a></li>
          <li><a class="course-link" href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
      </ul>
      </div>
    </div>
  );
}



export default CourseStatus;

