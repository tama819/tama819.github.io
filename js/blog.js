
  {
    const dts = document.querySelectorAll('dt');
  
    dts.forEach(dt => {
      dt.addEventListener('click', () => {
        dt.parentNode.classList.toggle('appear');
  
  
        dts.forEach(el => {
          if (dt !== el) {
            el.parentNode.classList.remove('appear');
          }
        });
      });
    });
  }

  {
    const pageTopBtn = document.getElementById('pagetop');
    pageTopBtn.addEventListener("click", function(){
      const me = arguments.callee;
      const nowY = window.pageYOffset;
      window.scrollTo(0, nowY - 100);
      if (nowY > 0) {
        window.setTimeout(me, 10);
      }
    });
  
  }
  
  
  {
    const open = document.getElementById('open');
    const accordion = document.getElementById('accordion');
    const photo = document.getElementById('photo');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
    
    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
      accordion.classList.add('hide');
      photo.classList.add('hide');
    });
   
    
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
      accordion.classList.remove('hide');
      photo.classList.remove('hide');
    });
    }
    
  
    {
      window.addEventListener('load' , function () {
        viewSlide('.slide img');
      });
      function viewSlide(className, slideNo = -1) 
      {
        let imgArray = document.querySelectorAll(className);
        if (slideNo >= 0) {
          // 初回以外は現在のスライドを消す
          imgArray[slideNo].style.opacity = 0;
        }
    
        slideNo++;
        if (slideNo >= imgArray.length) {
          slideNo = 0;
        }
    
        imgArray[slideNo].style.opacity = 1;
        let msec = document.getElementById('slide_speed').value;
        setTimeout(function(){viewSlide(className, slideNo);}, msec);
      }
    }
  