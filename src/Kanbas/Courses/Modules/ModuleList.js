import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './ModuleList.css';
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="wd-modules-list">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="wd-module-item mb-4">
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



