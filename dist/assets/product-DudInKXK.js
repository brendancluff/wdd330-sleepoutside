import{l as e,g as o,a as s,s as i}from"./utils-CTUWzs5M.js";import{P as n}from"./ProductData-CPraFIbS.js";class u{constructor(t,d,c){this.productId=t,this.category=d,this.dataSource=c,this.product={}}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails()}renderProductDetails(){const t=this.product,d=document.querySelector(".product-detail");d.innerHTML=`
      <h3>${t.Brand.Name}</h3>
      <h2 class="divider">${t.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${t.Image}"
        alt="${t.Name}"
      />
      <p class="product-card__price">$${t.FinalPrice}</p>
      <p class="product__color">${t.Colors[0].ColorName}</p>
      <p class="product__description">
        ${t.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
      </div>
    `}}e();const l=o("product"),p=o("category"),r=new n(p),m=new u(l,r);m.init();function h(a){let t=s("so-cart")||[];t.push(a),i("so-cart",t)}async function g(a){const t=await r.findProductById(a.target.dataset.id);h(t)}document.getElementById("addToCart").addEventListener("click",g);
