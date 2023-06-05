// do something!

const StarRating = () => {
  const addStarRatingCSS = () => {
    const starRatingCSSPAth = 'star-rating/theme.css';
    const link = document.createElement('link');
    link.href = starRatingCSSPAth;
    link.rel = 'StyleSheet';

    const lastLink = document.querySelector(
      'link[rel="stylesheet"]:last-of-type'
    );
    lastLink.parentNode.insertBefore(link, lastLink.nextSibling);
  };

  const addStarRating = () => {
    const stars = `
      <div class='star-rating-container'>
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
      </div>
    `;

    document.querySelectorAll('.star-rating').forEach((container) => {
      container.innerHTML = stars;
    });
  };

  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      addStarRatingCSS();
      addStarRating();
    });
  };

  init();
};

export default StarRating;
