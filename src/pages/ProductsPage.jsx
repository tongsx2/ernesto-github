import { useEffect, useState } from "react"


function ProductsPage() {
    const [products,setProducts] = useState([])
    
    useEffect(() => {

        const fetchProducts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products')
            const data = await response.json();
            setProducts(data)
            
        }
        fetchProducts()
     }, [] )  

  return (
    <div className="bg-teal-300 pt-20">
      <h1 className="text-2xl font-serif text-center text-emerald-900">Products Pages</h1>
      
      <div className="grid grid-cols-3 gap-3">

        {products.map((product) =>{
            return(
                <div key={product.id} className="p-2 border-2 rounded-md ">
                    <img src={product.images[0]} />
                    <div className="truncate">{product.title}</div>
                    <div className="text-lg font-medium text-red-600 text-center">${product.price}</div>
                </div>
        )
            } )}

      </div>
      
      
    </div>
  )
}

export default ProductsPage
