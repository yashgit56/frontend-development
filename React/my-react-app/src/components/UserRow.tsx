import { useTranslation } from "react-i18next";
import type { User } from "../constants";

type UserProps = {
  user: User;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

function UserRow({ user, onUpdate, onDelete }: UserProps) {
  const { t } = useTranslation();

  return (
    <tr key={user.id} className={!user.active ? "inactive-row" : ""}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className={user.role === "Admin" ? "role-admin" : ""}>
        {user.role === "Admin" ? t("role.Admin") : t("role.User")}
      </td>
      <td>
        <span className={`status ${user.active ? "active" : "inactive"}`}>
          {user.active ? t("status.active") : t("status.inactive")}
        </span>
      </td>
      <td>
        <button onClick={() => onUpdate(user.id)}>{t("actions.update")}</button>
        <button onClick={() => onDelete(user.id)}>{t("actions.delete")}</button>
      </td>
    </tr>
  );
}

export default UserRow;
