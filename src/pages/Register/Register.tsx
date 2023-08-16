import Register_Main from '@/pages/Register/Components/template/register_main';
import Helmet_Title, { titles } from "@/utility/helmet_title";

export default function Register() {




  return (
    <>
      <Helmet_Title title={titles.register} />

      <div className="grid grid-cols-2 h-screen bg-secondary_bgcolor ">

        <Register_Main />

      </div>
    </>
  )
}
