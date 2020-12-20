document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger')
  const sidebar = document.querySelector('.sidebar')

  const inventory = document.querySelector('.inventory')
  const inventoryBtn = document.querySelector('.inventory-btn')

  const open = 'is-open'
  const close = 'is-close'

  burger.addEventListener('click', function() {
    if (burger.classList.contains(open)) {
      burger.classList.remove(open)
      burger.classList.add(close)

      sidebar.classList.remove(open)
      sidebar.classList.add(close)
    } else if (burger.classList.contains(close)) {
      burger.classList.remove(close)
      burger.classList.add(open)

      sidebar.classList.remove(close)
      sidebar.classList.add(open)
    }
  });

  inventoryBtn.addEventListener('click', function() {
    if (inventoryBtn.classList.contains(open)) {
      inventory.classList.remove(open)
      inventory.classList.add(close)

      inventoryBtn.classList.remove(open)
      inventoryBtn.classList.add(close)
    } else if (inventoryBtn.classList.contains(close)) {
      inventory.classList.remove(close)
      inventory.classList.add(open)

      inventoryBtn.classList.remove(close)
      inventoryBtn.classList.add(open)
    }
  });
});