const contacts = [
    {index: 1,fname: 'Jace',surname: 'Charles',ID: 34567898,phone: '079846355',pin: 345689,amount: 0},
    {index: 2,fname: 'Peter',surname: 'Simon',ID: 34567899, phone: '079846365', pin: 345699, amount: 0},
    {index: 3,fname: 'James',surname: 'Mathew',ID: 34567810,phone: '079846375',pin: 345677,amount: 0},
    {index: 4,fname: 'Thomas',surname: 'Anderson',ID: 34567812,phone: '079846654',pin: 345655,amount: 0},
    {index: 5,fname: 'Alvin',surname: 'Kiptoo',ID: 34567813,phone: '079846363',pin: 345666,amount: 0},
    {index: 6,fname: 'Mathew',surname: 'Jones',ID: 34567863,phone: '0798466458',pin: 345574,amount: 0,},
    {index: 7,fname: 'John',surname: 'Alloy',ID: 34567964,phone: '079846388',pin: 345615,amount: 0,},
    {index: 8,fname: 'Brian',surname: 'Davis',ID: 34567879,phone: '079847659',pin: 345561,amount: 0,},
    {index: 9,fname: 'Beatrice',surname: 'Johnson',ID: 34567897,phone: '079846345',pin: 345678,amount: 50000,},
    {index: 10,fname: 'Mary',surname: 'heather',ID: 34566549,phone: '0798463457',pin: 345459,amount: 50000,}
]
//creation of the Sacco and Chama groups
const Sacco = contacts.slice()
console.log(Sacco)
const Chama = contacts.slice(1,9)
console.log(Chama)

//removing 6 users from the Sacco group
const newSacco = Sacco.slice(4,8)
console.log(newSacco)

//sending money to a group of contacts
function sendtogroup(group, deduction) {
    group.forEach(c => send(c.phone, deduction))
}
sendtogroup(newSacco, 100)
sendtogroup(Chama, 500*2)