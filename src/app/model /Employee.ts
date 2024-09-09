export class EmployeeModel {
    empId: number;
    name: string;
    city: string;
    state: string;
    contactNo: string;
    email: string;
    address: string;
    pinCode: string;

    constructor(){
        this.empId = 0;
        this.name = '';
        this.city = '';
        this.state = '';
        this.contactNo = '';
        this.email = '';
        this.address = '';
        this.pinCode = '';

    }
}

