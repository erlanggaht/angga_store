import {create} from "zustand";


const useLoginActive = create((set) => ({
    isLogin :  false,
    setLogin : (boolean : boolean) => set((state: {isLogin : any}) => {
        state.isLogin = boolean;
        localStorage.setItem('isLogin',state.isLogin)
    })
}))

export default useLoginActive