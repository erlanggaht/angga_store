import Login_Main from '@/pages/Login/Components/template/login_main';
import Helmet_Title, { titles } from "@/utility/helmet_title";



export default function Login() {



  return (
    <>
      <Helmet_Title title={titles.login} />
      <div className="grid grid-cols-2 h-screen bg-secondary_bgcolor ">
        <Login_Main />
      </div>
    </>


  )
}
