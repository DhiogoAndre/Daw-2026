import type { Product } from "../dtos/product"

type productCardProp = {
  product: Product
}

export function ProductCard( { product }: productCardProp) {
  return (
    <article>
      <figure>
        <img
          src={product.image}
          alt={product.description}
        />
        <figcaption>{product.category}</figcaption>
      </figure>
      <h3>{product.name}</h3>
      <p>
        {product.description}
      </p>
      <p>
        <strong>R$ {product.price}</strong>
      </p>
      <button type="button">Adicionar</button>
    </article>
  )
}
