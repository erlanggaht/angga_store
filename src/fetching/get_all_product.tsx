
// limit_number : number,
export default async function get_all_product(
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    ) {
    const response =await fetch('https://fakestoreapi.com/products')
    setLoading(true)
    try {
        return (await response).json()
    } catch (error) {
        return 'error'
    } finally {
    setLoading(false)
    }
}
