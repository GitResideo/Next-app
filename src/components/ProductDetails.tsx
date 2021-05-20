import React, { Component, useState, useEffect } from "react";
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import { ImageGallery } from "./ImageGallery";

interface Product {
  Id: string;
  Category: string;
  Name: string;
  Price: string;
  Image: string;
  DecImage1: string;
  DecRollImages: string;
  DecContent1: string;
  DecContent2: string;
  DecContent3: string;
  DecContent4: string;
  DecSelectAModel: string;
  DecSpec1Image: string;
  DecSpec1Content1: string;
  DecSpec1Content2: string;
  DecSpec2Image: string;
  DecSpec2Content1: string;
  DecSpec2Content2: string;
}

type ProductDetailsProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
}

class ProductDetails extends React.Component<ProductDetailsProps, Product> 
{
  constructor(props: ProductDetailsProps) 
  {
    super(props);

    this.state = {
      Id: "" ,
      Category: "" ,
      Name: "" ,
      Price: "" ,
      Image: "" ,
      DecImage1: "" ,
      DecRollImages: "" ,
      DecContent1: "" ,
      DecContent2: "" ,
      DecContent3: "" ,
      DecContent4: "" ,
      DecSelectAModel: "" ,
      DecSpec1Image: "" ,
      DecSpec1Content1: "" ,
      DecSpec1Content2: "" ,
      DecSpec2Image: "" ,
      DecSpec2Content1: "" ,
      DecSpec2Content2: "" 
    };

    // this.setProduct = this.setProduct.bind(this);
  }

  // setProduct(index: string) {
  //   this.setState({ Path: index });
  // }

  componentDidMount()
  {
    
    const params = new URLSearchParams(window.location.search); 
    var productId = params.get('id')||'';
    
    var qry='/api/products/id/'+productId;;

    fetch(qry)
    .then((res) => res.json())
    .then(json=>{
        // console.log(json);
        this.setState({ 
          Id: json[0].Id ,
          Category: json[0].Category ,
          Name: json[0].Name ,
          Price: json[0].Price ,
          Image: json[0].Image ,
          DecImage1: json[0].DecImage1 ,
          DecRollImages: json[0].DecRollImages ,
          DecContent1: json[0].DecContent1 ,
          DecContent2: json[0].DecContent2 ,
          DecContent3: json[0].DecContent3 ,
          DecContent4: json[0].DecContent4 ,
          DecSelectAModel: json[0].DecSelectAModel ,
          DecSpec1Image: json[0].DecSpec1Image ,
          DecSpec1Content1: json[0].DecSpec1Content1 ,
          DecSpec1Content2: json[0].DecSpec1Content2 ,
          DecSpec2Image: json[0].DecSpec2Image ,
          DecSpec2Content1: json[0].DecSpec2Content1 ,
          DecSpec2Content2: json[0].DecSpec2Content2,
        });

      }
    )
    
  }

  render() {
    return (
      <div >
         <div class="parent-1">

        {/* <div>Product ID :  </div> */}


        {/* breadcrumb */}

            <div>
              <ol class="breadcrumb">
                <li><a href="/" tabindex="0">home</a></li>/
                <li><a href="/" tabindex="0">products</a></li>/
                <li><a href="/" tabindex="0">Thermostats</a></li>/
                <p class="active" >{this.state.DecContent1}</p>
              </ol>
            </div>

        {/* Row 1 */}

            <div class="row align-items-start detailsrow detailsrow-1">
              <div class="col-5" >
                  <ImageGallery product={this.state}/>
              </div>
              <div class="col-7">
              <img class="score-image" src={'product-images/P'+this.state.Id+'/'+this.state.DecImage1} alt={this.state.Name} ></img>
                <h2 class="details-row1-title-1">{this.state.DecContent1}</h2>
                <h4 class="rde-product-sku" >{this.state.DecContent2}</h4>
                <div class="rde-pdp-description">
                <p ><strong>{this.state.DecContent3}</strong></p>
                <p >{this.state.DecContent4}</p>

                {/* Dropdown Start */}
                <div class="modelSelectorDiv">
                <label id="modelSelectorLabel" class="modelSelectorText">Select a Model : </label>

                <select id="selectAModel" class="select_mate">
                  {
                    this.state.DecSelectAModel.split('|').map(item=>(
                        <option class="custom-option" value={item}>{item}</option>
                    ))

                  }
                </select>

              </div>
              <br></br>
                {/* Dropdown End */}

                <button
                  className="snipcart-add-item product__button btn btn-outline-dark btn-add-to-cart ctrl-standard fx-sliderIn"
                  data-item-id={this.state.Id}
                  data-item-name={this.state.Name}
                  data-item-price={this.state.Price}
                  data-item-url={'product-images/P'+this.state.Id+'/'+this.state.Image}
                  data-item-description={this.state.DecContent4}
                  data-item-image={'product-images/P'+this.state.Id+'/'+this.state.Image}>
                  Add to cart
                </button>

            </div>
              </div>
            </div>

        {/* Row 2 */}

          <div class="row align-items-start detailsrow detailsrow-2">
              <div class="col-7">
                  <div>
                      <h2>{this.state.DecSpec1Content1}</h2>
                      <p >{this.state.DecSpec1Content2}</p>
                      {/* <p >{this.state.DecSpec1Content1}</p> */}
                  </div>
              </div>
              <div class="col-5" >
                <img src={'product-images/P'+this.state.Id+'/'+this.state.DecSpec1Image} alt="" className="product__image detailsrow-image"/>
              </div>  
        </div>

        {/* Row 3 */}

            <div class="row align-items-start detailsrow detailsrow-3">
              <div class="col-5" >
                  <img src={'product-images/P'+this.state.Id+'/'+this.state.DecSpec2Image} alt="" className="product__image detailsrow-image"/>
              </div>
              <div class="col-7 detailsrow-spec-note">
                 <div>
                      <h2>{this.state.DecSpec2Content1}</h2>
                      <p >{this.state.DecSpec2Content2}</p>
                      {/* <p >Complete with a user guide, this T6 Hydronic Programmable Thermostat can be easily installed by professionals and enjoyed. Enhance the entire thermostat experience for your home with control of both air ambient temperature and floor temperature.</p> */}
                 </div>
              </div>
            </div>

        {/* END */}


          </div>        
      </div>
    );
  }
}

export default ProductDetails;
