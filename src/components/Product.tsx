import { withRouter, RouterProps } from 'next/router'
import { motion } from 'framer-motion'

export interface IProduct {
  Id: number ,
  Category: string ,
  Name: string ,
  Price: number ,
  Image: string ,
  DecImage1: string ,
  DecRollImages: string ,
  DecContent1: string ,
  DecContent2: string ,
  DecContent3: string ,
  DecContent4: string ,
  DecSelectAModel: string ,
  DecSpec1Image: string ,
  DecSpec1Content1: string ,
  DecSpec1Content2: string ,
  DecSpec2Image: string ,
  DecSpec2Content1: string ,
  DecSpec2Content2: string 
}

interface IProductProps {
  product: IProduct
  router: RouterProps
}

const Product = (props: IProductProps) => {
  return (
    <div class="card-layout">
      <div class="card-resultitem">
        <div class="js-price-loader"  >
          <div class="card-product-tile">

            <div class="product-box">

              <span>&nbsp;</span>
              {/* <img src={props.product.image} alt="" className="product__image"/> */}

              <a class="CoveoResultLink" href={"/product-details?id="+props.product.Id} tabindex="0">

                <motion.img src={'product-images/P'+props.product.Id+'/'+props.product.Image} whileHover={{
                  scale: 1.3,
                  transition: {
                    duration: .2
                  }
                }} />
              </a>
              <div class="product-title">
                <a class="CoveoResultLink" href={"/product-details?id="+props.product.Id} tabindex="0">
                  <span class="rde-coveo-title">{props.product.Name}</span>&nbsp;(<span class="rde-coveo-price-promo js-price">${props.product.Price})</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="product__price-button-container">

        <button
          className="snipcart-add-item product__button btn btn-outline-dark btn-add-to-cart ctrl-standard fx-sliderIn"
          data-item-id={props.product.Id}
          data-item-name={props.product.Name}
          data-item-price={props.product.Price}
          data-item-url={props.router.pathname}
          data-item-description={props.product.DecContent4}
          data-item-image={'product-images/P'+props.product.Id+'/'+props.product.Image}>
          Add to cart
        </button>

      </div>

    </div>

  )
}

export default withRouter(Product)