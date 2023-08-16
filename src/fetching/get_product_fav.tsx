export default async function get_product_fav (
    setLoading :  React.Dispatch<React.SetStateAction<boolean>>,
    endpoint : string
    ) {


    const response = fetch(endpoint ,{method : 'GET'})

    setLoading(true)
    try {
        return (await response).json()
        
    } catch (error) {
        return 'error'
    } finally {
      setLoading(false)
    }

}