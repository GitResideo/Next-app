import React from "react";
import Product, { IProduct } from "./Product"

interface IProductListProps {
  products: IProduct[]
}

class ProductList extends React.Component<IProductListProps> 
{
  constructor(props: IProductListProps) 
  {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount()
  {
    var qry='/api/products/';
    
    fetch(qry)
    .then((res) => res.json())
    .then(json=>{
        //console.log(json);
        this.setState({ 
          products: json
        });

      }
    )
  }

  render()
  {
    return (
      <div>
        <section>
          <div className="product-list imageBlock">
            {this.state.products.filter(prd => prd.Id < 5)?.map((item, index) => <Product product={item} key={index}/>)}
          </div>
        </section>

        <section>
          <div className="product-list imageBlock">
            {this.state.products.filter(prd => prd.Id > 4 && prd.Id < 9)?.map((item, index) => <Product product={item} key={index}/>)}
          </div>
        </section>
        
        <section>
          <div className="product-list imageBlock">
            {this.state.products.filter(prd => prd.Id > 8 && prd.Id < 13)?.map((item, index) => <Product product={item} key={index}/>)}
          </div>
        </section>

      </div>
    );
  }
}

export default ProductList;