import { useReducer } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  isSubmitted: boolean;
  error: string | null;
};

type FieldName = "name" | "email" | "password";

type Action =
  | { type: "FIELD"; field: FieldName; value: string }
  | { type: "SUBMIT" }
  | { type: "RESET" };

function updateFormData(state: User, action: Action): User {
  switch (action.type) {
    case "FIELD":
      return { ...state, [action.field]: action.value } as User;
    case "SUBMIT":
      if (!state.name || !state.email || !state.password) {
        return { ...state, error: "All fields are required" };
      }
      return { ...state, isSubmitted: true, error: null };
    case "RESET":
      return {
        name: "",
        email: "",
        password: "",
        isSubmitted: false,
        error: null,
      };
    default:
      return state;
  }
}

function about() {
  const [formData, dispatch] = useReducer(updateFormData, {
    name: "",
    email: "",
    password: "",
    isSubmitted: false,
    error: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  const handleReset = () => dispatch({ type: "RESET" });
  return (
    <>
      <section style={{ maxWidth: 720, margin: "18px auto", padding: 12 }}>
        <h2>UseReducer Demo Form</h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({ type: "FIELD", field: "name", value: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "FIELD", field: "email", value: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        {formData.error && (
          <div style={{ color: "#b91c1c", marginTop: 8 }}>{formData.error}</div>
        )}

        {formData.isSubmitted && (
          <div style={{ color: "#064e3b", marginTop: 8 }}>
            Form submitted successfully.
          </div>
        )}
      </section>
    </>
  );
}

export default about;
