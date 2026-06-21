import { useState } from "react";
import { Link } from "react-router-dom";

export default function AccountPage() {
  const [message, setMessage] = useState("");

  function submitAccount(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    setMessage(`Signed in as ${email}.`);
  }

  return (
    <section className="pageSection accountPage">
      <div className="pageHeader">
        <Link to="/" className="linkButton">← Back to home</Link>
        <h1>Sign in</h1>
      </div>
      <form className="accountForm" onSubmit={submitAccount}>
        <label>
          Email or mobile number
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input name="password" type="password" required placeholder="At least 6 characters" />
        </label>
        <button type="submit">Continue</button>
        {message && <p className="message">{message}</p>}
      </form>
    </section>
  );
}
