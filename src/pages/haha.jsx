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
    <div>
      <h1 className="text-3xl mb-6">Products Pages</h1>

      <div className="grid grid-cols-3 gap-2">

      {products.map((product) =>{
        return(
            <div key={product.id} className="p-2 border-2 rounded-md">
                <img src={product.images[0]} />
                <div className="truncate">{product.title}</div>
                <div className="text-lg font-medium text-red-600">${product.price}</div>
            </div>
        )
      } )}

      </div>
      
      
    </div>
  )
}

export default ProductsPage
