const initCookies = () => {
  document.getElementById('cookie_close-btn').addEventListener('click', hiddenCloseclick);
  document.getElementById('cookie_close').addEventListener('click', hiddenCloseclick);

  function hiddenCloseclick() {
    let hide = document.getElementById('hidden-element');
    if (hide.style.display === 'none') {
      hide.style.display = 'block';
    } else {
      hide.style.display = 'none';
    }
  }
};

export {initCookies};
