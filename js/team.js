const openItem = item => {
  const container = item.closest(".team-item");
  const contentBlock = container.find(".team-content");
  const textBlock = contentBlock.find(".team-content_block");
  const reqHeight = textBlock.height();

  container.addClass("active");
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find(".team-content");
  const itemContainer = container.find(".team-item");

  itemContainer.removeClass("active");
  items.height(0);
}

$(".team-title").click( e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team-list");
  const elemContainer = $this.closest(".team-item");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  }else {
    closeEveryItem(container);
    openItem($this)
  }
  
});