export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    email: string;
    dob: Date;
    
    isValid() : boolean {
        return this.firstName != undefined && this.firstName.length > 0 &&
            this.address != undefined && this.address.length > 0;
    }
}
