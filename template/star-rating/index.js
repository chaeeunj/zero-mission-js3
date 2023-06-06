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

    const handleMouseEnter = (event) => {
      const allStars = Array.from($container.querySelectorAll('i'));
      const currentStar = event.target;

      const currentStarIndex = allStars.indexOf(currentStar);

      allStars.slice(0, currentStarIndex + 1).forEach((star) => {
        star.style.color = '#a7a7a7';
      });
    };

    const handleMouseLeave = (event) => {
      const allStars = Array.from($container.querySelectorAll('i'));
      const currentStar = event.target;

      const currentStarIndex = allStars.indexOf(currentStar);

      allStars.forEach((star, index) => {
        if (index <= currentStarIndex) {
          star.style.color = '#dcdcdc';
        }
      });
    };

    const onClickStarIcon = (event) => {
      const allStars = Array.from($container.querySelectorAll('i'));
      const currentStar = event.target;

      const currentStarIndex = allStars.indexOf(currentStar);
      let currentRating = currentStarIndex + 1;

      document.querySelectorAll('.current-rating > span').forEach((element) => {
        element.innerHTML = `${currentRating}`;
      });

      allStars.slice(0, currentStarIndex + 1).forEach((star) => {
        star.style.color = '#db5b33';
      });
    };

    for (let i = 1; i <= maxRating; i++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('bx', 'bxs-star');
      starIcon.setAttribute('data-rating', i);

      starRatingContainer.appendChild(starIcon);

      starIcon.addEventListener('mouseenter', handleMouseEnter);
      starIcon.addEventListener('mouseleave', handleMouseLeave);
      starIcon.addEventListener('click', onClickStarIcon);
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
