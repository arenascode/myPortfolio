const mobileMenu = document.getElementById("navBar_mobileMenu")
console.log(mobileMenu);
const hamburguerBtn = document.getElementById('hamburger-btn')
console.log(hamburguerBtn);
const closeModalBtn = document.getElementById('closeModalBtn')
console.log(closeModalBtn);

function openModalMenu() {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.style.opacity = 1
  }, 10)
}

function closeModalMenu() {
  mobileMenu.style.opacity = 0
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 500)
}

window.onclick = function (e) {
  if (e.target === mobileMenu) {
    mobileMenu.style.opacity = 0
    setTimeout(() => {
      mobileMenu.style.display = 'none'
    }, 500)
  }
}

hamburguerBtn.addEventListener('click', openModalMenu)

closeModalBtn.addEventListener('click', closeModalMenu)