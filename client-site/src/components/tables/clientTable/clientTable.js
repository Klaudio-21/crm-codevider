import React from 'react';
import { useEffect, useState } from "react";
import './clientTable.css'
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BiFilterAlt } from "react-icons/bi";
import Pagination from '../../pagination/Pagination';
import Search from "../../UI/SearchComponent/Search"
import Button from '../../UI/ButtonComponent/Button';
import { AiOutlineSortAscending } from "react-icons/ai";
import { getClients, deleteClient, updateClient } from "../../../services/clientsServices";
import { setupAxiosInterceptors } from "../../../services/axiosInterceptor";
import AddClientModal from '../../modals/clientModals/addClientModal';
import EditClientModal from '../../modals/clientModals/editClientModal';
import FilterClientModal from '../../modals/clientModals/filterClientModal';

function ClientsTable() {

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
    const fetchClientsData = async () => {
        try {
            const clients = await getClients();
            console.log("clientssss", clients)

        }
        catch (error) {
            console.log("Error fetching employees: ", error);
        }
    }

    useEffect(() => {
        fetchClientsData();
    }, []);
    return (
     
            <div className="client-table-container">
                <div className="client-table-header">
                    <h1 className="client-title">Clients</h1>
                    <BiFilterAlt className="clients-filter-icon" onClick={toggleFilterModal} />
                    <Search />
                    <Button type="button" onClick={toggleModal}>Add</Button>
                </div>
                <table className="client-table">
                    <thead>
                        <tr>
                            <th ><AiOutlineSortAscending className="sort-icon" />Name</th>
                            <th><AiOutlineSortAscending className="sort-icon" />Surname</th>
                            <th ><AiOutlineSortAscending className="sort-icon" />Email</th>
                            <th>Phone</th>
                            <th >City</th>
                            <th>Gender</th>
                            <th>Birthday</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >

                        <tr className="table-tr-clients">
                            <td>name</td>
                            <td>surname</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>city</td>
                            <td>gender</td>
                            <td>birthday</td>
                            <td><MdModeEditOutline className="clients-edit-icon" onClick={toggleEditModal} /></td>
                            <td><MdDelete className="clients-delete-icon" /></td>
                        </tr>

                    </tbody>
                </table>
                <div className="client-pagination">
                    <Pagination />
                </div>
                {isModalOpen && <AddClientModal onClose={toggleModal} />}
                {isEditModalOpen && <EditClientModal onClose={toggleEditModal} />}
                {isFilterModalOpen && <FilterClientModal onClose={toggleFilterModal} />}
            </div>
       
      
    );
}

export default ClientsTable;