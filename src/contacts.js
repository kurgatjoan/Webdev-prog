// function createContactsTable(contacts) {
//     const contactsTable = document.getElementById("Contacts Table");
//     contacts.forEach(contact => {
//       const row = document.createElement("tr");
//       const fnameCell = document.createElement("td");
//       fnameCell.textContent = contact.fname;
//       const phoneCell = document.createElement("td");
//       phoneCell.textContent = contact.phone;
//       row.appendChild(nameCell);
//       row.appendChild(phoneCell)
//       contactsTable.appendChild(row);
//     });
//   }
  
  const contacts = [
    {fname: 'Jace',surname: 'Charles',ID: 34567898,phone: '079846355',pin: 345689,amount: 0},
    {fname: 'Peter',surname: 'Simon',ID: 34567899, phone: '079846365', pin: 345699, amount: 0},
    {fname: 'James',surname: 'Mathew',ID: 34567810,phone: '079846375',pin: 345677,amount: 0},
    {fname: 'Thomas',surname: 'Anderson',ID: 34567812,phone: '079846654',pin: 345655,amount: 0},
    {fname: 'Alvin',surname: 'Kiptoo',ID: 34567813,phone: '079846363',pin: 345666,amount: 0},
    {fname: 'Mathew',surname: 'Jones',ID: 34567863,phone: '0798466458',pin: 345574,amount: 0,},
    {fname: 'John',surname: 'Alloy',ID: 34567964,phone: '079846388',pin: 345615,amount: 0,},
    {fname: 'Brian',surname: 'Davis',ID: 34567879,phone: '079847659',pin: 345561,amount: 0,},
    {fname: 'Beatrice',surname: 'Johnson',ID: 34567897,phone: '079846345',pin: 345678,amount: 50000,},
    {fname: 'Mary',surname: 'heather',ID: 34566549,phone: '0798463457',pin: 345459,amount: 50000,}
]
  
// let table = document.querySelector("Contacts Table");
// for (let i=0; i < Object.keys(contacts[0]).length; i++){
//     let irow ='fname${i+1}'
//     let row = '<td> ${irow} </td>';
//     for( let icol = 0; icol < contacts.length; icol++){
//         row += '<td> ${contacts[icol][irow]} </td>';
//     }
//     contacts.insertAdjacentHTML('beforeend', '<td> ${row} </td>');
// }
//   createContactsTable(contacts);


document.addEventListener("DOMContentLoaded", function() {
    // Accessing the table
    var table = document.getElementById("Contacts Table");

    // Looping through each row and column of the table
    for (var i = 0, row; row = table.rows[i]; i++) {
        // Iterate through each cell in the current row
        for (var j = 0, cell; cell = row.cells[j]; j++) {
            // Access cell data
            console.log(cell.innerHTML);
        }
    }

    // Adding data to the table when button is clicked
    var addDataBtn = document.getElementById("addDataBtn");
    addDataBtn.addEventListener("click", function() {
        var newRow = table.insertRow(); // Insert a new row
        var cell1 = newRow.insertCell(0); // Insert cells into the new row
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = "Doe"; // Add data to the cells
        cell2.innerHTML = "35";
        cell3.innerHTML = "Chicago";
    });
});