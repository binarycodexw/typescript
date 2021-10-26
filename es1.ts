

export enum RoleType {staff,student,manager,admin};
export enum Gender {male,female,other};



export interface obj {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: AddressData,
    role: RoleType,
    username: string,
    profilePhotoUrl: string,
    companies: [CompanyData, CompanyData],
    gender: Gender
}


export interface AddressData {
    city: string,
    street: string,
    postalCode: string
}

export interface CompanyData {
    id: number,
    name: string,
    description: string,
    location: AddressData
}



const oggetto: obj = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '14/12/1995',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: RoleType.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
}
