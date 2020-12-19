document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger')
  const sidebar = document.querySelector('.sidebar')

  const jobs = document.querySelector('.jobs')
  const jobsBtn = document.querySelector('.jobs-btn')

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

  jobsBtn.addEventListener('click', function() {
    if (jobsBtn.classList.contains(open)) {
      jobs.classList.remove(open)
      jobs.classList.add(close)

      jobsBtn.classList.remove(open)
      jobsBtn.classList.add(close)
    } else if (jobsBtn.classList.contains(close)) {
      jobs.classList.remove(close)
      jobs.classList.add(open)

      jobsBtn.classList.remove(close)
      jobsBtn.classList.add(open)
    }
  });
});