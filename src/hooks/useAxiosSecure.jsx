import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";


const instanceAxios = axios.create({
    baseURL: 'https://job-portal-server-neon-eight.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();

    const {logOut} = UseAuth();

    useEffect(() => {
        instanceAxios.interceptors.response.use(response => {
            return response;
        }, error => {
            // console.log('error caught in inceptors', error)

            if(error.status === 401 || error.status === 403){
                
                logOut()
                .then(() => {
                    // console.log('logged out')
                    navigate('/signIn')
                })
                .catch(error => {
                    console.log(error)
                })
            }

            return Promise.reject(error)
        })

    }, [])

    return instanceAxios;
};

export default useAxiosSecure;