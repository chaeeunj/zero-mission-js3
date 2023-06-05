const StarRating = ($container) => {
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
    const maxRating = parseInt($container.getAttribute('data-max-rating'));

    const starRatingContainer = document.createElement('div');
    starRatingContainer.classList.add('star-rating-container');

    const handleMouseEnter = () => {};

    const handleMouseLeave = () => {
      // console.log('out');
    };

    for (let i = 1; i <= maxRating; i++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('bx', 'bxs-star');

      starRatingContainer.appendChild(starIcon);

      starIcon.addEventListener('mouseenter', handleMouseEnter);
      starIcon.addEventListener('mouseleave', handleMouseLeave);
    }
    $container.appendChild(starRatingContainer);
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
