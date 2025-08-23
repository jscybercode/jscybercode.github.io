function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Hello, ${name || "stranger"}!`);
  return false;
}

