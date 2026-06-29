export interface Employee {
  id: number;
  name: string;
  division: string;
}

export interface Manager extends Employee {
  numberOfEmployee: number;
}
