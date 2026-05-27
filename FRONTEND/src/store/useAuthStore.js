import { create } from "zustand";

export const useAuthStore = create((set)=>({
    authUser:{name:"kris",_id:123,age:21},
    isLoggedIn:false,
    isLoading:false,

    login:()=>{
        console.log("we just logged in ");
        set({isLoggedIn:true,isLoading:true});
    },
}))