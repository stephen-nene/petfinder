export const handleSwitchClick = (event, isLoginForm, setIsLoginForm, formHolder) => {
    event.preventDefault();
    setIsLoginForm(!isLoginForm);

    const signupForm = formHolder.current ? formHolder.current.querySelector(".signup") : null;
    const loginForm = formHolder.current ? formHolder.current.querySelector(".login") : null;

    if (signupForm && loginForm) {
      if (isLoginForm) {
        signupForm.classList.add("switched");
        loginForm.classList.remove("switched");
      } else {
        signupForm.classList.remove("switched");
        loginForm.classList.add("switched");
      }
    }
  };

//   export {handleSwitchClick}
