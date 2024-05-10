import { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const setChange = (event) => {
    const newObj = { ...form };
    newObj[event.target.name] = event.target.value;
    setForm(newObj);
    console.log(form);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          name={"username"}
          onChange={setChange}
          placeholder="Username"
        />
        <input type="password" name={"password"} placeholder={"Password"} />
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default SignUp;
