type Role = "Developer" | "Manager" | "Intern" | "QA";

type ResourceType = "Laptop" | "Monitor" | "Chair" | "SoftwareLicense";

type ResourceMetaMap = {
  Laptop: { ram: number; cpu: string };
  Monitor: { size: number; resolution: string };
  Chair: { material: string; ergonomic: boolean };
  SoftwareLicense: { softwareName: string; expires: Date };
};

type ContactInfo = {
  email?: string;
  phone?: string;
};

type Employee = {
  readonly id: number;
  name: string;
  role: Role;
  department: Department;
  projects: Project[];
  contactInfo?: ContactInfo;
};

type Department = {
  readonly id: number;
  name: string;
  employees: Employee[];
  head?: Employee;
};

type Project = {
  readonly id: number;
  name: string;
  deadline: Date;
  location?: [latitude: number, longitude: number];
  team: Employee[];
  resources: Resource[];
};

type Resource<T extends ResourceType = ResourceType> = {
  readonly id: number;
  resourceType: ResourceType;
  assignedTo?: Employee;
  meta: ResourceMetaMap[T];
};

const devDept: Department = { id: 1, name: "Development", employees: [] };
const qaDept: Department = { id: 2, name: "QA", employees: [] };

const alice: Employee = {
  id: 101,
  name: "Alice",
  role: "Developer",
  department: devDept,
  projects: [],
  contactInfo: { email: "alice@company.com" },
};

const bob: Employee = {
  id: 102,
  name: "Bob",
  role: "Manager",
  department: devDept,
  projects: [],
};

const charlie: Employee = {
  id: 201,
  name: "Charlie",
  role: "QA",
  department: qaDept,
  projects: [],
};

devDept.employees.push(alice, bob);
qaDept.employees.push(charlie);
devDept.head = bob;
qaDept.head = charlie;

const laptopAlice: Resource<"Laptop"> = {
  id: 1,
  resourceType: "Laptop",
  assignedTo: alice,
  meta: { ram: 16, cpu: "i7" },
};

const monitorBob: Resource<"Monitor"> = {
  id: 2,
  resourceType: "Monitor",
  assignedTo: bob,
  meta: { size: 27, resolution: "4K" },
};

const chairCharlie: Resource<"Chair"> = {
  id: 3,
  resourceType: "Chair",
  assignedTo: charlie,
  meta: { material: "Leather", ergonomic: true },
};


const projectX: Project = {
  id: 1001,
  name: "Project X",
  deadline: new Date("2026-12-31"),
  location: [28.7041, 77.1025],
  team: [alice, bob],
  resources: [laptopAlice, monitorBob],
};

const projectY: Project = {
  id: 1002,
  name: "Project Y",
  deadline: new Date("2026-06-30"),
  team: [charlie],
  resources: [chairCharlie],
};


alice.projects.push(projectX);
bob.projects.push(projectX);
charlie.projects.push(projectY);

