import { Passenger } from './11-optional-chaining';
export interface Passenger {
    name: string;
    children?: string[];
}

const passanger1: Passenger = {
    name: 'Fernando',
}

const passanger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

const retunrPrintChildrenNumber = (passenger: Passenger): number => {
    if (!passenger.children) return 0;
    const howManyChildren = passenger.children!.length;
    console.log(howManyChildren);
    return howManyChildren;
}

printChildren(passanger1);
retunrPrintChildrenNumber(passanger1);