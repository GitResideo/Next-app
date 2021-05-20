import * as React from "react";

export const ImageGallery = (props) => {

  return (
    

    <div id="demo" className="carousel slide" data-ride="carousel">

      {/* Below Navigation */}
      <ul className="carousel-indicators">
        {props.product.DecRollImages.split('|').map((item, key) => <li data-target="#demo" data-slide-to={key} className={`${key === 0 ? 'active' : ''}`}></li>)}
      </ul>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {props.product.DecRollImages.split('|').map((item, key) => <div className={`${key === 0 ? 'carousel-item active first-item' : 'carousel-item'}`}><img src={'product-images/P' + props.product.Id + '/' + item} alt={item} /></div>)}
      </div>


      {/* Carousel Next Prev */}

      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>

    </div>

  );
};
