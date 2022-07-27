const button = document.querySelector('.promo__order-button');
const alert = document.querySelector('.promo__alert');

export const alertShow = () => {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    alert.classList.add('is-show');

    setTimeout(() => alert.classList.remove('is-show'), 2000);
  });
};
