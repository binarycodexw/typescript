import {obj} from "./es1";
import {AddressData} from "./es1";
import {CompanyData} from "./es1";

import {RoleType} from "./es1"

import {Gender} from "./es1"



class Person implements obj{
    id!: number;
    name: string;
    surname: string;
    age!: number;
    dateOfBirth!: string;
    address!: AddressData;
    role!: RoleType; // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username!:string;
    profilePhotoUrl!: string;
    companies!: [CompanyData,CompanyData];
    gender!:Gender; // Generi possibili: 'male', 'female', 'other'
    
    constructor(name:string, surname:string){
        this.name = name;
        this.surname = surname;

    }

    printPersonFullname(){
        return  `FullName: ${this.name} ${this.surname}`;
    }

    
}

const person = new Person('Mario', 'Rossi');
console.log(person.printPersonFullname())
