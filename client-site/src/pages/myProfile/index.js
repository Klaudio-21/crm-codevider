
import './index.css'
import React, { useEffect, useState } from "react";
import TextField from "../../components/UI/TextFieldComponent/TextField";
import './index.css'
import Button from "../../components/UI/ButtonComponent/Button"
import { getUserProfile } from "../../services/userServices";
import { useUserContext } from "../../hooks/contextHooks/useUserContext";
import UserTable from '../../components/tables/userTable/userTable';
import {setupAxiosInterceptors} from "../../services/axiosInterceptor"
function MyProfile() {
    const { user, dispatch } = useUserContext();
    setupAxiosInterceptors();
    const [userProfile, setUserProfile] = useState(null);

    
    return (
        <div className='profile'>
           <UserTable/>
        </div>
    );
}

export default MyProfile;