export interface DepartmentsDTO {
    id:number;
    name:string
}
export interface EmployeeDTO {
    id:number;
    name:string;
    departmentId:number;
}