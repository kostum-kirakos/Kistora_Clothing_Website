function TrendingCard({ id, title, trendTitle, description, image, category, link }) {
    return `
        <div class = "trending__product swiper-slide" data-id='${id}' data-category='${category}' product-link="${link}">
            <div class='trending__product__image'>
                <img src='${image}' alt='${title}'/>
            </div>
            <div class="trending__product__description">
                <div class="trending__product__text">
                    <h1 class="title">
                        <span>${trendTitle.split(" ")[0]}</span>
                        <p>${trendTitle.split(" ").slice(1).join(" ")}</p>
                    </h1>
                    <p class="category">${category} collection</p>
                    <p class="desc">${description}</p>
                </div>
                <a class="btn explore-more" href="${link}" target="_blank">Get Yours<span class="material-symbols-rounded"> trending_flat</span></a>
            </div>
        </div>
    `;
}

export default TrendingCard;
