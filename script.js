  import * as yup from 'yup';

  const form = document.getElementById("form"); //formu js'e bağlar

  const inputs = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
  };

 const schema = yup.object().shape({
  firstName: yup.string().required("First Name cannot be empty"),
  lastName: yup.string().required("Last Name cannot be empty"),
  email: yup.string().email("Looks like this is not an email").required("Email cannot be empty"),
  password: yup.string().required("Password cannot be empty"),
});

  form.addEventListener("submit", function (e) {
    e.preventDefault(); //form submit edilince sayfanın yenilenmesini engeller validation için 

    
    clearAllErrors();

    const data = {
      firstName: inputs.firstName.value.trim(),
      lastName: inputs.lastName.value.trim(),
      email: inputs.email.value.trim(),
      password: inputs.password.value.trim(),
    };

    schema
      .validate(data, { abortEarly: false }) //tümünü gösterir
      .then(() => {
        console.log("successful");
         form.reset();
        
      })
      .catch((err) => {
        showErrors(err.inner);
      });
  });

  function showErrors(errors) {
    errors.forEach((error) => {
      const input = inputs[error.path];
      const icon = input.parentElement.querySelector("img");
      input.classList.add("border-red-500", "text-black", "placeholder:text-red-300");
      if (icon) icon.classList.remove("hidden");
      
      if (error.path === "email") {
        input.placeholder = "email@example/com"; //hint for user
      }

      let errorText = input.parentElement.querySelector("small");
      if (!errorText) {
        errorText = document.createElement("small");
        errorText.className = 'text-red-400 text-xs italic absolute right-2 -bottom-5';
        input.parentElement.appendChild(errorText);
      }
      errorText.innerText = error.message;
    });
  }

  function clearError(input) {
    const icon = input.parentElement.querySelector("img");
    const errorText = input.parentElement.querySelector("small");

    input.classList.remove("border-red-500", "text-red-500", "placeholder:text-red-300");
    if (icon) icon.classList.add("hidden");
    if (errorText) errorText.remove();
  

  if (input.id === "email") {
    input.placeholder = "Email Address";
  }

  }
  function clearAllErrors() {
    Object.values(inputs).forEach((input) => clearError(input));
  }

  Object.values(inputs).forEach((input) => { //yazmaya başlayınca hatayı siler 
    input.addEventListener("input", () => {
      clearError(input);
    });
  });

