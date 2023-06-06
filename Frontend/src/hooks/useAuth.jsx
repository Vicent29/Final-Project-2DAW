import {useContext, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"

import AuthContextProvider from '../context/AuthContext';
import AuthService from '../services/AuthService';
import JWTService from '../services/JWTService';

import { toast } from 'react-toastify';

import { auth, providerGoogle, providerFacebook, providerTwitter, providerGithub } from "../services/firebase/firebase.config";
import {signInWithPopup} from "firebase/auth";

export function useAuth() {
    const navigate = useNavigate();
    const { user, loadUser, checkAdmin, setJWT, setUser, setIsAdmin } = useContext(AuthContextProvider)
    const [users, setUsers] = useState([])

    const [status, setStatus] = useState({ loading: false, error: false })

    const signup = useCallback((data) => {
        setStatus({ loading: true, error: false });
        AuthService.registerUser(data)
            .then((res) => {
                setUserLoged(res);
            }).catch((error) => {
                if (error.response.data == "Email exist.") {
                    toast.error("The email already belongs to an account", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    setStatus({ loading: false, error: true });
                }
            });
    }, [setStatus]);

    const signin = useCallback((data) => {
        setStatus({ loading: true });
        AuthService.loginUser(data)
            .then((res) => {
                setUserLoged(res);
            }).catch((error) => {
                if (error.response.data == 'email or password not correct') {
                    toast.error("Email or password is not correct", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    setStatus({ loading: false });
                }
            });
    }, [setStatus]);


    const socialLogin = (rrss) => {
      let provider =
        rrss == "google"
          ? providerGoogle
          : rrss == "facebook"
          ? providerFacebook
          : rrss == "twitter"
          ? providerTwitter
          : rrss == "github"
          ? providerGithub
          : null;

      signInWithPopup(auth, provider)
        .then((info) => {
            let uid = info.user.uid;
            let email = info.user.email;
            let first_name= info.user.displayName.split(" ")[0];
            let last_name = info.user.displayName.split(" ");
            last_name = last_name.slice(1).join(" ");
            let img_user = info.user.photoURL;

            let infoUser = {
                uid: uid,
                email: email,
                first_name: first_name,
                last_name: last_name,
                img_user: img_user
            };
            AuthService.loginSocialLogin(infoUser)
                .then((res) => {
                    setUserLoged(res);
                })
                .catch(() => {
                    toast.error("Social Login is disaable", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    setStatus({ loading: false });
                });
        })
    };

    const setUserLoged = useCallback((res) => {
        setStatus({ loading: false, error: false });
        JWTService.saveToken(res.data.token, res.data.rftoken);
        toast.success("User " + res.data.user.first_name + " login successfully", {
            position: toast.POSITION.TOP_RIGHT
        });
        async function loadData() {
            await loadUser()
            await checkAdmin()
        }
        loadData()
        navigate('/home');
    }, [setStatus, navigate])


    const logout = useCallback(async () => {
        await AuthService.logout()
            .then((res) => {
                navigate('/home');
                if (res.data == "Logout Backend user success") {
                    toast.info("LogOut backend succes", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            }).catch((error) => {
                navigate('/home');
                console.log(error.response);
            });
        if (user) {
            setUser(null)
            setJWT(null)
        }
        setIsAdmin(false)
        JWTService.destroyAllTokens();
        toast.success("LogOut successfully ", {
            position: toast.POSITION.TOP_RIGHT
        });
    }, [navigate, user])


    const updateUser = useCallback((data) => {
        setStatus({ loading: true, error: false });
        AuthService.updateUser(data)
            .then((response) => {
                setStatus({ loading: false, error: false });
                setUser(response.data.user)
                JWTService.saveToken(response.data.token, response.data.rftoken);
                if (data.balance) {
                    toast.success(" Your balance has been updated to " + response.data.user.balance + "€", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }else {
                    toast.success(response.data.user.first_name + " has been updated successfully", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            }).catch((error) => {
                setStatus({ loading: false, error: true });
                if (error.response.data == "Email exist") {
                    toast.error("Error with email", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    toast.error("Error Update User", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            });
    }, [user]);

    const resetNotis = useCallback((data) => {
        if (user.noti !== data.notis) {
            setStatus({ loading: true, error: false });
            AuthService.updateUser(data)
                .then((response) => {
                    setStatus({ loading: false, error: false });
                    setUser(response.data.user)
                });
        }
    }, [user]);

    const getUsers = useCallback(async() => {
        setStatus({ loading: true, error: false });
        await AuthService.getUsers()
            .then(({data}) => {
                setStatus({ loading: false, error: false });
                setUsers(data)
            }); 
    }, []);

    const changeStatus = useCallback(async(id)=> {
        await AuthService.changeStatus(id)
        .then(({data}) => {
            setStatus({ loading: false, error: false });
            toast.success(data.first_name + " has been updated successfully", {
                position: toast.POSITION.TOP_RIGHT
            });
            getUsers()
        }); 
    },[])

    return { status, signup, signin, socialLogin, setUserLoged, logout, updateUser, resetNotis, loadUser, checkAdmin, setJWT, setUser, getUsers,users,setUsers, changeStatus }
}


