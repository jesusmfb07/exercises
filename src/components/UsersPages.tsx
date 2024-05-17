import axios from 'axios';
import {useEffect} from 'react';
import { ReqResUserListResponse } from '../interfaces';

const loadUsers = async() => {
    try{
        const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2');
        return data.data;
    }catch (error) {
        console.log(error);
        return [];
    }
}



export const UsersPages = () => {
  
  
  
    useEffect(() => {

        loadUsers().then(users => console.log( users))

        // axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
        //   .then( resp => console.log(resp.data.data[0]));



        // fetch('https://reqres.in/api/users?page=2')
        // .then(Resp => Resp.json())
        // .then(data => console.log(data));
    },[])
  
  
    return (
        <>

         <h3>Usuarios:</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>avatar</td>
                    <td>nombre</td>
                    <td>email</td>
                </tr>
            </tbody>
        </table>
        
        
        </>
  )
}

export default UsersPages
