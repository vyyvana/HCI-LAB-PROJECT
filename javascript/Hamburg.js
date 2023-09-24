const toggle_Button = document.getElementsByClassName('toggle-button')[0]

const navlinks = document.getElementsByClassName('navlinks')[0]

toggle_Button.addEventListener('click', () => 
{
    navlinks.classList.toggle('active')
})