import type { User } from "../constants";

type UserProps = {
  user: User;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

function UserRow({ user, onUpdate, onDelete }: UserProps) {
  return (
    <tr key={user.id} className={!user.active ? "inactive-row" : ""}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className={user.role === "Admin" ? "role-admin" : ""}>{user.role}</td>
      <td>
        <span className={`status ${user.active ? "active" : "inactive"}`}>
          {user.active ? "Active" : "Inactive"}
        </span>
      </td>
      <td>
        <button onClick={() => onUpdate(user.id)}>Update</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default UserRow;
