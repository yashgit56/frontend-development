import "./App.css";
import { lazy, Suspense, useEffect, useState } from "react";
import type { User, Role } from "./constants";
import Modal from "./components/Modal";

const UserRow = lazy(() => import("./components/UserRow"));
// import Test from "./components/Test";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<Role>("Admin");
  // use single field instead of multiple states
  const [inputs, setInputs] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const usersData: User[] = [
    {
      id: 1,
      name: "Yash Vataliya",
      email: "yash.vataliya@example.com",
      role: "Admin",
      active: true,
    },
    {
      id: 2,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      role: "Admin",
      active: true,
    },
    {
      id: 3,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      role: "User",
      active: false,
    },
    {
      id: 4,
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      role: "Admin",
      active: true,
    },
    {
      id: 5,
      name: "Neha Verma",
      email: "neha.verma@example.com",
      role: "User",
      active: false,
    },
  ];

  // ✅ Immutable update
  const handleUpdate = (id: number) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, active: false } : user))
    );
  };

  // ✅ Immutable delete
  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email } = inputs;

    if (typeof name !== "string" || typeof email !== "string") {
      return;
    }

    if (name === "" || email === "") return;

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      role,
      active: Math.random() % 2 ? true : false,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setInputs({ name: "", email: "" });
    setRole("User");
  };

  // ✅ Run only once
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="table-container">
        {users.length === 0 ? (
          <h2 className="no-users">Loading Users...</h2>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <Suspense fallback={<div> Loading User Row...</div>}>
                  <UserRow
                    key={user.id}
                    user={user}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                  />
                </Suspense>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="form-container">
        <h3> Add User </h3>
        <form onSubmit={handleFormData} className="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={inputs.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={inputs.email}
            onChange={handleChange}
          />
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setRole(e.target.value as Role)
            }
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </>
  );
}

export default App;
