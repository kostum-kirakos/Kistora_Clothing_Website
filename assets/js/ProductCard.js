function ProductCard({ id, title, price, image, image2, category, link }) {
    return `<div class="swiper-slide product-card" data-id="${id}" data-category="${category}" data-image1="${image}" data-image2="${image2}" product-link="${link}">
                <div class="product-card__image">
                    <img src="${image}" alt="${title}" />
                </div>
                <div class="product-card__description">
                    <div class="row">
                        <div class="product-card__title">${title}</div>
                        <button class="product-card__btn btn">
                            <span class="material-symbols-rounded">favorite</span>
                        </button>
                    </div>
                    <div class="row">
                        <div class="product-card__price">$${price}</div>
                        <a class="explore-more btn" target="_blank" href="${link}">Buy Now <span class="material-symbols-rounded"> trending_flat</span></a>
                    </div>
                    <span class="border-animation"></span>
                    <span class="border-animation"></span>
                    <span class="border-animation"></span>
                </div>
            </div>`;
}

export default ProductCard;
