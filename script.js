// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully!";
});

// To-Do List functionality
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
