//User object
const user = {
    fname: 'Andrew',
    surname: 'Smith',
    ID: 34567897,
    phone: '079846345',
    pin: 345678,
    amount: 50000,

}
console.log(user)

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

console.log(contacts[2])
//code to check if the sent amount is within 0 and 1000, if it is then transaction cost is 10 if it is within 1000 and 10000 then transaction cost is 15 and if it is above 10000 then transaction cost is 20
function transact_cost(deduction) {
    let transaction_cost
    if (0 < deduction && deduction <= 1000) {
        transaction_cost = 10
    } else if (1000 < deduction && deduction <= 10000) {
        transaction_cost = 15
    } else {
        transaction_cost = 20
    }
    return transaction_cost
}

//initialization of the transactions array that will hold all transactionsmade for that day
let transactions = []

//function to send a certain amount of money to a contact using their phone number and the amount to be sent
function send(phone,deduction) {
    function searchPhoneNumber(phone) {
        return contacts.some(contact => contact.phone === phone)
      }
    
      if (!searchPhoneNumber(phone)) {
        console.log('Contact with phone number ' + phone + ' not found.')
        return;
      }
    
      const contact = contacts.find(c => c.phone === phone)
        transactions.push(user.fname + ' has sent ' + deduction + ' to ' + contact.fname+ '. ')
        user.amount -= transact_cost(deduction) + deduction
        transactions.push(user.fname + "'s" +' remaining amount is ' + user.amount) 
        if (user.amount < 0) {
        console.log('Insufficient balance.')
        return
    }
    return user.amount
    }
send('079846388',6000)

//reusing the send function to send money to 3 other different contacts
send('079846355' , 12000)
send('079846363', 1000)
send('079846345', 4000)

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

//function to withdraw money from account
function withdraw(deduction) {
    if (deduction > user.amount) {
        console.log('Insufficient balance.')
        return;
    }

    transactions.push(user.fname + ' has withdrawn ' + deduction + '. ')
    user.amount -= transact_cost(deduction) + deduction
    transactions.push(user.fname + ' remaining amount is ' + user.amount)
    return user.amount
}

withdraw(500)
withdraw(1000)

//every transaction made during the day
console.table(transactions)


// document.addEventListener('DOMContentLoaded', () => {
//     const balanceBox = document.querySelector('.balance-box');
//     const balanceMessage = document.querySelector('#balance-message');
//     balanceMessage.textContent = `Your balance is ${user.amount}.`;
//     balanceBox.style.display = 'block';
//   });
