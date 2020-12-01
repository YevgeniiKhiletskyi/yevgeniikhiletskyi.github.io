const findBlockByAlias = (alias) => {
  return $(".reviews-display_item").filter((ndx, item) => {
    return $(item).attr("data-open_link") === alias;
  });
};

$(".interactive-avatar_link").click(e => {
  e.preventDefault();
  
  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".reviews-switcher_item");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");
});