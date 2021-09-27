$(".agregar").click((addEvent) => {
  addEvent.preventDefault();
  // don't do anything if input is empty
  if (!$("#newText").val()) {
    return;
  }

  // create element
  const li = $(
    '<li id="test" class="lis"><span class="list-item-text">apples</span><div class="list-actions"><button class="checar" type="submit">check</button><button class="del" type="submit">delete</button></div></li>'
  );

  // set the text of the item (sanitizes input)
  li.find(".list-item-text").text($("#newText").val());

  // add it to the list
  $(".Lista").append(li);

  // add delete event listener
  li.find(".del").click((delEvent) => {
    delEvent.preventDefault();
    $(delEvent.currentTarget).parent().parent().remove();
  });

  // add check event listener
  li.find(".checar").click((checkEvent) => {
    checkEvent.preventDefault();
    $(checkEvent.currentTarget)
      .parent()
      .parent()
      .find(".list-item-text")
      .toggleClass("list-item-selected");
  });

  // resets the input value field
  $("#newText").val("");
});
