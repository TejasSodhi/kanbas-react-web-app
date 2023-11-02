import React from "react";
import { useParams } from "react-router-dom";
//import db from "../../Database";
import './ModuleList.css';
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { LuGripVertical } from 'react-icons/lu'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  updateModule,
  deleteModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  //const modules = db.modules;
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="wd-modules-list">
      <li className="list-group-item mb-4">
        <input
          value={module.name}
          className="form-control"
          onChange={(e) =>
            dispatch(
              setModule({
                ...module,
                name: e.target.value,
              })
            )
          }
        />
        <br />
        <textarea
          value={module.description}
          className="form-control"
          onChange={(e) =>
            dispatch(
              setModule({
                ...module,
                description: e.target.value,
              })
            )
          }
        />
        <br />
        <button
          className="btn btn-success"
          onClick={() =>
            dispatch(addModule({ ...module, course: courseId }))
          }
        >
          Add Module
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => dispatch(updateModule(module))}
        >
          Update Module
        </button>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="wd-module-item mb-4">
            <div className="wd-module-item-action-buttons float-end">
              <button
                className="btn btn-primary"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ms-1"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
            </div>
            <div className="wd-module-header">{module.name}
              <span class="wd-check-ellipse-button-float-end float-end">
                <AiFillCheckCircle color="green" />
                <HiOutlineEllipsisVertical />
              </span>
            </div>
            <div className="wd-module-body">{module.description}
              <span class="wd-check-ellipse-button-float-end float-end">
                <AiFillCheckCircle color="green" />
                <HiOutlineEllipsisVertical />
              </span>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;



