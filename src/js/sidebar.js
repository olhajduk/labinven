document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger')
  const sidebar = document.querySelector('.sidebar')
  const open = 'is-open'
  const close = 'is-close'

  burger.addEventListener('click', function() {
    console.log(burger.classList.contains(open))

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
});