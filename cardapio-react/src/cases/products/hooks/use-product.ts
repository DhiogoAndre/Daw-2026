import { useEffect, useState } from "react"
import { ProductService } from "../services/product-services"
import type { Products } from "../dtos/products"

export function useProduct() {
  const [products, setProducts] = useState<Products[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ProductService.listall()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return {
    products,
    loading,
    error,
  }
}
