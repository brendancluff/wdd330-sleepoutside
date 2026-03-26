import{r as c,l as o,g as i}from"./utils-CTUWzs5M.js";import{P as n}from"./ProductData-CPraFIbS.js";function l(t,e){return`<li class="product-card">
    <a href="/product_pages/index.html?product=${t.Id}&category=${e}">
      <img
        src="${t.Images.PrimaryMedium}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class m{constructor(e,r,a){this.category=e,this.dataSource=r,this.listElement=a}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){c(a=>l(a,this.category),this.listElement,e)}}o();const s=i("category")||"tents",d={tents:"Tents",backpacks:"Backpacks","sleeping-bags":"Sleeping Bags",hammocks:"Hammocks"};document.querySelector("#category-title").textContent=d[s]||"Products";const u=new n(s),g=document.querySelector(".product-list"),p=new m(s,u,g);p.init();
