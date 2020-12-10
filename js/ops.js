const sections = $("section");
const display = $(".maincontent");
const upScrolle = -100;
const sideMenu = $(".fixed-item");
const menuLinks = sideMenu.find(".fixed-link");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

//на секцию навешиваем класс 'active'
sections.first().addClass("active");

//расчет позиции для секции
const countSectionPosition = (sectionEq) => {
  return sectionEq * upScrolle;
};

//функционал по смене темы для бокового меню
const changeMenuThemeForSection = (sectionEq) => {
  const currentSection = sections.eq(sectionEq);
  const menuTheme = currentSection.attr("data-sidemenu-theme");
  const activeClass = "fixed-item_dark";
  
  if (menuTheme === "green") {
    sideMenu.addClass(activeClass);
  }else {
    sideMenu.removeClass(activeClass);
  }
};
    
const resetActiveClassForItem = (links, linkEq, activeClass) => {
  links.eq(linkEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = (sectionEq) => {
  if (inScroll) return;
    
  const transitionOver = 1000;
  const mouseInertiaOver = 200;

  inScroll = true;
    
  const position = countSectionPosition(sectionEq);

  changeMenuThemeForSection(sectionEq);

  display.css( {
    transform: `translateY(${position}%)`
  });
  
  resetActiveClassForItem(sections, sectionEq, "active");
    
  setTimeout(() => {
    inScroll = false;
    resetActiveClassForItem(menuLinks, sectionEq, "fixed-link_active")
  },transitionOver + mouseInertiaOver);
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index())
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index())
  }
}  

//определение скролинга  в какую сторону
$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    //next
    scrollViewport("next");
  }

  if (deltaY < 0) {
    //prev
    scrollViewport("prev");
  }
});

//Скролинг по странице с помощью клавиатуры
$(window).on("keydown", e => {

  const tagName = e.target.tagName.toLowerCase();

  if (tagName != "input" && tagName != "textarea") {
    switch (e.keyCode) {
      case 38:
        scrollViewport("prev");
        break;
  
      case 40:
        scrollViewport('next');
        break; 
    }
  }
});

$("wrapper").on("touchmove", e => e.preventDefault());

//боковое миню
$("[data-scroll-to]").click( e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);

  performTransition(reqSection.index());
});

if (isMobile) {
  $("body").swipe( {
    swipe: function(event, direction) {
      const scroller = viewportScroller();
      let scrollDirection = "";

      if (direction === "up") scrollDirection = "next";
      if (direction === "down") scrollDirection = "prev";

      scroller[scrollDirection]();
    },
  });
};

