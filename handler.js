(function () {
  var playerDetailObserver = function(mutationsList) {
    let tooltip = document.querySelector('#player-detail .tooltip');
    if (tooltip) tooltip.remove();
  };
  var observer = new MutationObserver(playerDetailObserver);
  observer.observe(document.querySelector('#player-detail'), { childList: true});
})();
