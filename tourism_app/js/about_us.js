

let form = document.getElementById("contact_form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    data = {
        email: e.target.email.value,
        password: e.target.password.value,
        address: e.target.address.value,
        city: e.target.city.value,
        gender: e.target.gender.value,
        phone: e.target.phone.value,
        terms:e.target.terms.value,
    }
    console.log(data)
})
