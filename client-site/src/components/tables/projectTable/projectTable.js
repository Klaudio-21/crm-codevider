import React from 'react';
import './projectTable.css'
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { setupAxiosInterceptors } from "../../../services/axiosInterceptor";
import { useEffect, useState } from "react";
import { getProjects, deleteProject, updateProject } from "../../../services/projectServices";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import Pagination from "../../pagination/Pagination";
import Search from "../../UI/SearchComponent/Search"
import Button from "../../UI/ButtonComponent/Button"
import AddProjectModal from '../../modals/projectModals/addProjectModal';
import EditProjectModal from '../../modals/projectModals/editProjectModal';
import FilterProjectModal from '../../modals/projectModals/filterProjectModal';
function ProjectsTable() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };
    const toggleFilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };
    setupAxiosInterceptors()
    const fetchProjectsData = async () => {
        try {
            const projects = await getProjects();
            console.log("projectssss", projects)

        }
        catch (error) {
            console.log("Error fetching employees: ", error);
        }
    }

    useEffect(() => {
        fetchProjectsData();
    }, []);
    return (
       
            <div className="project-table-container">
                <div className="project-table-header">
                    <h1 className="project-title">Projects</h1>
                    <BiFilterAlt className="projects-filter-icon" onClick={toggleFilterModal} />
                    <Search />
                    <Button type="button" onClick={toggleModal}>Add</Button>

                </div>
                <table className="project-table">
                    <thead>
                        <tr>
                            <th ><AiOutlineSortAscending className="sort-icon" /> Name</th>
                            <th > Data</th>
                            <th >Status</th>
                            <th > Assigned</th>
                            <th ></th>
                            <th > </th>
                        </tr>
                    </thead>
                    <tbody >

                        <tr className="table-tr-projects">
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td><MdModeEditOutline className="projects-edit-icon" onClick={toggleEditModal} /></td>
                            <td><MdDelete className="projects-delete-icon" /></td>
                        </tr>

                    </tbody>
                </table>
                <div className="project-pagination">
                    <Pagination />
                </div>
                {isModalOpen && <AddProjectModal onClose={toggleModal} />}
                {isEditModalOpen && <EditProjectModal onClose={toggleEditModal} />}
                {isFilterModalOpen && <FilterProjectModal onClose={toggleFilterModal} />}
            </div>
           
   
    );
}

export default ProjectsTable;