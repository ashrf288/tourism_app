let auth_user = {
  userName: "ashrf",
  password: "1234567",
};
let form = document.getElementById("contact_form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  data = {
    email: e.target.email.value,
    userName: e.target.userName.value,
    password: e.target.password.value,
    address: e.target.address.value,
    city: e.target.city.value,
    gender: e.target.gender.value,
    phone: e.target.phone.value,
    terms: e.target.terms.value,
  };
  console.log(data);

  if (
    auth_user.userName == data.userName &&
    auth_user.password == data.password
  ) {
    document.querySelector(".submit_result").innerHTML = `
      <div class="card  info-card  ">
      <div class="card-body">
        <h2 class="card-title">auth result </h2><hr>
        <p class="card-text"><strong> form has been submitted succssfully </strong> </p>
      </div>
    </div>
      `;
  } else {
    console.log("not auth");
  }
});
