import { create } from 'zustand'

interface IRegisterUser {
    users : any,
    add_user : any,
}

const storage_database : any = localStorage.getItem('databases')

const useUsers = create<IRegisterUser>((set) => ({
  users: storage_database ? JSON.parse(storage_database) : [],
  add_user: (users_regis : any) => set((state) => ({users : [...state.users,users_regis]})),
}))




export default useUsers