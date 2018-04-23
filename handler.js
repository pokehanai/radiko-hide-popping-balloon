(function () {
  const playerDetailObserver = function (mutationsList) {
    const tooltip = document.querySelector('#player-detail .tooltip');
    if (tooltip) tooltip.remove();
  };
  const observer = new MutationObserver(playerDetailObserver);
  observer.observe(document.querySelector('#player-detail'), { childList: true });
})();
