import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
            username: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Sign up!</h2>
      {error && <p>{err}</p>}
      <form onSubmit={submit}>
        <label>
          Username:
          <input
            type="text"
            name={"username"}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name={"password"}
            placeholder={"Enter password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default SignUp;
