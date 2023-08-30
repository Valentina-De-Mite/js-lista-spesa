/*Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

const shoppingLists = ["pane", "pasta", "tofu", "avocado", "pomodori"];

let i = 0;

while (i < shoppingLists.length) {
  console.log(shoppingLists[i]);
  document.getElementById("shoppingListok").innerHTML +=
    " - " + shoppingLists[i] + " ;";
  i++;
}
