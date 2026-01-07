import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const [displayName, setDisplayName] = useState("");

  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayName(name.firstName + " " + name.lastName);
    // setName({
    //   firstName: "",
    //   lastName: "",
    // });
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        name="formData"
        className={styles.form}
      >
        <h1>Full Name Display</h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={name.firstName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={name.lastName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>{displayName && <span>Full Name: {displayName}</span>}</div>
      </form>
    </div>
  );
}
