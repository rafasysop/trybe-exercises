const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]
const {name, bornIn, nationality} = people;
// escreva filterPeople abaixo
const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (
        people.nationality == "Australian" && people.bornIn >= 1901 && people.bornIn <= 2000
        )
    )
  );

const filteredPeople = verifyAgeDrive(people);

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })