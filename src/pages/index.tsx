import { GetStaticProps } from 'next'
import Image from 'next/image'


import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { HomeContainer, Product } from '../styles/pages/home'

import { stripe } from '../lib/api'
import { formatterCurrency } from '../utils/formatterCurrency'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product 
            href={`/products/${product.id}`}
            key={product.id} 
            className="keen-slider__slide"
          >
          <Image src={product.imageUrl} width={520} height={480} alt="" />
            <footer>
              <strong>{product.name}</strong>
              <span>{formatterCurrency(product.price)}</span>
            </footer>
          </Product>
        )
      })}

    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount /100,
    }
  })

  await new Promise(resolve => setTimeout(resolve, 2000))
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  }
}
