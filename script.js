const sideNavEls = document.querySelectorAll('.dash')
const windowPathname = window.location.pathname

sideNavEls.forEach(sideNavEl => {
 const sideNavPathname = new URL(sideNavEl.href).pathname

 if ((windowPathname === sideNavPathname) || (windowPathname === '/agent-dashboard.html' && sideNavPathname === '/')) {
  sideNavEl.classList.add('current')
 }
})