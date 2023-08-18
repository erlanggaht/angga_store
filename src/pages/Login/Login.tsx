import Login_Main from '@/pages/Login/Components/template/login_main';
import Helmet_Title, { titles } from "@/utility/helmet_title";




export default function Login() {
 

  return (
    <>
      <Helmet_Title title={titles.login} />
      <div className="sm:grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1  bg-secondary_bgcolor  ">
        <Login_Main />
      </div>
    </>


  )
}
