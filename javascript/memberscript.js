document.getElementById("form").addEventListener("submit", (e) =>
{
    // e.preventDefault();
    var name = document.getElementById
    ("name").value
    
    var email = document.getElementById("email").value

    var phonenumber = document.getElementById("phonenumber").value

    var gender = document.getElementsByName("gender");

    var address = document.getElementById("address").value

    if(name.length == 0)
    {
        alert("Name is a required field");
        return;
    }

    if(name.length < 4)
    {
        alert("Name to short");
        return;
    }

    if(email.length == 0)
    {
        alert("Email is a required field");
        return;
    }

    if(!validateEmail(email))
    {
        alert("Email Invalid");
        return;
    }

    if(phonenumber.length == 0)
    {
        alert("Phone Number is a required field");
        return;
    }

    if(!validatePhoneNumber(phonenumber))
    {
        alert("Phone Number Invalid");
        return;
    }

    if(!(gender[0].checked || gender[1].checked))
    {
        alert("Gender is not selected");
        return;
    }
    
    if(address.length == 0)
    {
        alert("Address is a required field");
        return;
    }

})

function validateEmail(email)
{
    return ((email.indexOf("@") != -1) && (email.endsWith(".com")))
}

function validatePhoneNumber(phonenumber)
{
    return (phonenumber.startsWith("08"))
}


const toggle_Button = document.getElementsByClassName('toggle-button')[0]

const navlinks = document.getElementsByClassName('navlinks')[0]

toggle_Button.addEventListener('click', () => 
{
    navlinks.classList.toggle('active')
})