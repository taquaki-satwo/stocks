var $slideContents = document.querySelector('.slideContents');
var $slideBtns = document.querySelectorAll('.slideBtn');
var $stockModels = document.querySelectorAll('.stockModel');
var $modelName = document.querySelector('.modelName');

for (var i = 0, l = $slideBtns.length; i < l; i++) {
  $slideBtns[i].addEventListener('click', function () {
    $slideContents.classList.toggle('is-slide');
  });
}

for (var i = 0, l = $stockModels.length; i < l; i++) {
  $stockModels[i].addEventListener('click', function (e) {
    document.forms[0].stock_model.value = e.target.dataset.id;
    $modelName.textContent = e.target.textContent;
    $slideContents.classList.toggle('is-slide');
  });
}
