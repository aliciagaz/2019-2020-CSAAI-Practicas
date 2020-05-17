console.log("Ejecutando JS...");

const test = document.getElementById('test')

test.onclick = () => {
  console.log("Click!!");
  if (test.style.backgroundColor = "") {
    test.style.backgroundColor = "yelow";
  }
  else {
    test.style.backgroundColor = "";
  }
}
