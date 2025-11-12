


/*===============================star=================================*/


document.querySelectorAll('.stars').forEach(starGroup => {
  const stars = starGroup.querySelectorAll('i');
  const ratingValue = starGroup.nextElementSibling; // ⭐ 找到緊接在後面的 <p class="rating-value">
  
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.star);
      
      // 清除這一組的 active 狀態
      stars.forEach(s => s.classList.remove('active', 'fa-solid'));
      stars.forEach(s => s.classList.add('fa-regular'));
      
      // 點亮星星
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active', 'fa-solid');
        stars[i].classList.remove('fa-regular');
      }

      // 更新文字顯示
      ratingValue.textContent = `目前評分：${rating}`;
    });
  });
});



/*===============================btn=================================*/

function leftBtn() {
    let x = $('#product_div')
    let y = x.scrollLeft()

    if (y <= 0) {
        x.animate({
            scrollLeft: x[0].scrollWidth
        })
    } else {
        x.animate({
            scrollLeft: '-=300px'
        })
    }
}

function rightBtn() {
    let x = $('#product_div')
    let y = x.scrollLeft()
    let max = x[0].scrollWidth - x.outerWidth() - 1


    if (y >= max) {
        x.animate({
            scrollLeft: 0
        })
    } else {
        x.animate({
            scrollLeft: '+=300px'
        })
    }
}



/*===============================card=================================*/


document.querySelector('.card-1').addEventListener('mouseenter', function() {
  document.querySelector('.i-1').classList.add('active');
});

document.querySelector('.card-1').addEventListener('mouseleave', function() {
  document.querySelector('.i-1').classList.remove('active');
});



document.querySelector('.card-2').addEventListener('mouseenter', function() {
  document.querySelector('.i-2').classList.add('active');
});

document.querySelector('.card-2').addEventListener('mouseleave', function() {
  document.querySelector('.i-2').classList.remove('active');
});



document.querySelector('.card-3').addEventListener('mouseenter', function() {
  document.querySelector('.i-3').classList.add('active');
});

document.querySelector('.card-3').addEventListener('mouseleave', function() {
  document.querySelector('.i-3').classList.remove('active');
});



document.querySelector('.card-4').addEventListener('mouseenter', function() {
  document.querySelector('.i-4').classList.add('active');
});

document.querySelector('.card-4').addEventListener('mouseleave', function() {
  document.querySelector('.i-4').classList.remove('active');
});