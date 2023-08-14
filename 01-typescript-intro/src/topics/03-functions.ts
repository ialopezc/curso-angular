function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumber2 = (a: number, b: number): String => `${a + b}`;

const result: number = addNumbers(1, 2);

// console.table(result)
// console.table(addNumber2(1, 2));

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber + base;
}

const multiplyResult: number = multiply(5);
// console.log({ multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);

// strider.showHp();

export { };