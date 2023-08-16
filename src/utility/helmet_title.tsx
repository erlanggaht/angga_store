import { Helmet } from 'react-helmet';

export const titles = {
    home: 'Home - Angga Store',
    login: 'Login | Login Now',
    register: 'Signup | Create Account',
  };


function Helmet_Title ({title} : any ) {

    return (
        <Helmet>
        <title>{title}</title>
        </Helmet>
    )

}
  
export default Helmet_Title;


