import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddEmployeeModal from '../../modals/employeeModals/addEmployeeModal';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineSortAscending } from "react-icons/ai";
import Pagination from '../../pagination/Pagination';
import Search from '../../UI/SearchComponent/Search';
import Button from '../../UI/ButtonComponent/Button';
import { getEmployees, deleteEmployee, updateEmployee } from "../../../services/employeesServices";
import { setupAxiosInterceptors } from "../../../services/axiosInterceptor"
import './employeeTable.css'
import EditEmployeeModal from '../../modals/employeeModals/editEmployeeModal';
import FilterEmployeeModal from '../../modals/employeeModals/filterEmployeeModal';
function EmployeesTable() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [employee, setEmployee] = useState([]);
    const [queryString, setQueryString] = useState("");
    const [total, setTotal] = useState();
    const [result, setResult] = useState();
    //search
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
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


    const fetchEmployeesData = async () => {
        try {
            const queryParams = new URLSearchParams(location.search);
            queryParams.set("employee", "true");
            const queryString = queryParams.toString();
            const data = await getEmployees(`?${queryString}`);
            const employees = data.data;
            const total = data.total;
            const result = data.result;
            const currentPageFromQueryParam = parseInt(params.get("page"), 10) || 1;
            setResult(result);
            setTotal(total);
            setEmployee(employees);
            setTotalPages(Math.ceil(total / result));
            setCurrentPage(currentPageFromQueryParam);
        } catch (error) {
            console.log("Error fetching employees: ", error);
        }
    };

    useEffect(() => {
        fetchEmployeesData();
    }, [location.search]);

    const onPageChange = (newPage) => {
        console.log(newPage, "newPage");
        setCurrentPage(newPage, "newpage");
        params.set("page", newPage.toString());
        const newUrl = `?${params.toString()}`;
        console.log(newUrl, "newUrl");
        setQueryString(newUrl);
        navigate(`${newUrl}`);
    };
    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
        const searchQuery = event.target.value;
        navigate(`?search=${searchQuery}`);
    };
    return (

        <div className="employee-table-container">
            <div className="table-header">
                <h1 className="title">Employees</h1>
                <BiFilterAlt className="employees-filter-icon" onClick={toggleFilterModal} />
                <Search
                    placeholder={"Search"}
                    value={searchValue}
                    onChange={onSearchChange}
                />
                <Button type="button" onClick={toggleModal}>Add</Button>
            </div>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th ><AiOutlineSortAscending className="sort-icon" />Name</th>
                        <th><AiOutlineSortAscending className="sort-icon" />Surname</th>
                        <th ><AiOutlineSortAscending className="sort-icon" />Email</th>
                        <th>Phone</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th ><AiOutlineSortAscending className="sort-icon" />City</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                {/* <tbody >

                        <tr className="table-tr-employees">
                            <td >name</td>
                            <td>surname</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>position</td>
                            <td>department</td>
                            <td>city</td>
                            <td>gender</td>
                            <td>birthday</td>
                            <td><MdModeEditOutline className="employees-edit-icon" onClick={toggleEditModal} /></td>
                            <td><MdDelete className="employees-delete-icon" /></td>

                        </tr>



                    </tbody> */}
                <tbody>
                    {employee.map((empl) => (
                        <tr key={empl._id} className="table-tr-employees">
                            <td>{empl.name}</td>
                            <td>{empl.surname}</td>
                            <td>{empl.email}</td>
                            <td>{empl.phone}</td>
                            <td>{empl.department}</td>
                            <td>{empl.department}</td>
                            <td>{empl.city}</td>
                            <td>{empl.gender}</td>
                            <td>{empl.birthday}</td>
                            <td>
                                <MdModeEditOutline className="employees-edit-icon" />
                            </td>
                            <td>
                                <MdDelete className="employees-delete-icon" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="employee-pagination">
                <Pagination
                    result={result}
                    total={total}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            </div>
            {isModalOpen && <AddEmployeeModal onClose={toggleModal} />}
            {isEditModalOpen && <EditEmployeeModal onClose={toggleEditModal} />}
            {isFilterModalOpen && <FilterEmployeeModal onClose={toggleFilterModal} />}
        </div>



    )
}

export default EmployeesTable;