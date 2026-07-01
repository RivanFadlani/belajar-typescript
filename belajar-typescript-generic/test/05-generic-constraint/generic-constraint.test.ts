describe("Generic Constraint", () => {
  interface Employee {
    id: number;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VicePresident extends Manager {
    totalManager: number;
  }

  // class punya property dari interface Employee dan turunannya (Manager dan VicePresident)
  class EmployeeData<T extends Employee> {
    public employee: T;

    constructor(employee: T) {
      this.employee = employee;
    }
  }

  it("should support generic constraint", () => {
    // menggunakan tipe data dari interface 'Employee'
    const employee = new EmployeeData<Employee>({
      id: 1,
      name: "ripunn",
    });

    expect(employee.employee.id).toBe(1);
    expect(employee.employee.name).toBe("ripunn");

    // menggunakan tipe data dari interface 'Manager'
    const manager = new EmployeeData<Manager>({
      id: 2,
      name: "riven",
      totalEmployee: 100,
    });

    expect(manager.employee.id).toBe(2);
    expect(manager.employee.name).toBe("riven");
    expect(manager.employee.totalEmployee).toBe(100);

    // menggunakan tipe data dari interface 'VicePresident'
    const vicePresident = new EmployeeData<VicePresident>({
      id: 3,
      name: "rivan",
      totalEmployee: 100,
      totalManager: 25,
    });

    expect(vicePresident.employee.id).toBe(3);
    expect(vicePresident.employee.name).toBe("rivan");
    expect(vicePresident.employee.totalEmployee).toBe(100);
    expect(vicePresident.employee.totalManager).toBe(25);
  });
});
