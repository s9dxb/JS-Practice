const names = ["Thor", "Wolverine", "Venom"];
const email = ["thor@mail.com", "wolverine@gmail.com", "venom@gmail.com"];
const password = ["thor01", "wolverine02", "venom03"];

const users = [];

for (let i = 0; i < names.length; i++) {
  const user = {
    name: names[i],
    email: email[i],
    password: password[i],
  };
  users.push(user);
}
console.log(users);

function Login() {
  var email = "thor@gmail.com".toLowerCase();
  var password = "thor01";

  const found = users.find(
    (element) => element.email == email && element.password == password
  );

  if (found) {
    alert("user found");
  } else {
    alert("user not found");
  }
}

Login();

function Register() {
  var email = "thor@gmail.com".toLowerCase();
  var password = "test";
  var name = "said";

  const newUser = {
    name,
    email,
    password,
  };

  const found = users.find((element) => element.email == email);

  if (found) {
    alert("user already existing");
  } else {
    users.push(newUser);
  }
}

Register();
