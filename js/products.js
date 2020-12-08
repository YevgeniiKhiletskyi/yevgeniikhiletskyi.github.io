const mesureWidth = item => {
  
  let reqItemWidth = 0; 
  const screenWidth = $(window).width();
  const container = item.closest(".products-link");
  const titlesBlocks = container.find(".products-title");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find(".products-container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width:768px)").matches;
  
  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  }else {
    reqItemWidth =  500;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingRight - paddingLeft
  }

};

const closeEveryItemInContainer = container => {
  const items = container.find(".products-item");
  const content = container.find(".products-content");

  items.removeClass("active");
  content.width(0);
};

const opensItem = item => {
  const hiddenContent = item.find(".products-content");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find(".products-container");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".products-title").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".products-item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".products-link");
  
 if (itemOpened) {
  closeEveryItemInContainer(container)
 }else {
  closeEveryItemInContainer(container)
  opensItem(item);
 }
  
});