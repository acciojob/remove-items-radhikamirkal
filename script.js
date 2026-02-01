const button = document.querySelector(
  'input[type="button"][value="Select and Remove"]'
);

button.addEventListener("click", function () {
  const select = document.getElementById("colorSelect");

  if (select.selectedIndex !== -1) {
    select.remove(select.selectedIndex);
  }
});
