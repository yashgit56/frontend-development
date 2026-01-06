export type Role = "Admin" | "User";

export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
  active: boolean;
};
