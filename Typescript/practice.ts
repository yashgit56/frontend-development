// 1 topics covered union, type, optional parameter , readonly properties 
type Role = "Developer" | "Manager";

type Employee = {
  readonly id: Number;
  name: string;
  role: Role;
  email?: string;
  address?: string;
  projects: Project[];
};

type Project = {
  readonly id: Number;
  name: string;
  deadline: Date;
  location?: string;
  team: Employee[];
};

const project1: Project = {
  id: 1,
  name: "Alpha",
  deadline: new Date(),
  team: [],
};

const project2: Project = {
  id: 2,
  name: "Bita",
  deadline: new Date(),
  team: [],
};

const emp1: Employee = {
  id: 1,
  name: "Alice",
  role: "Developer",
  projects: [project1, project2],
};
project1.team.push(emp1);
project2.team.push(emp1);
