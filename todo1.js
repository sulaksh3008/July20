var todoList = [];
function create() {
  console.log("Insertion of To-Do's");
  id = prompt("Enter the id");
  item = prompt("Enter the task");
  status = prompt("Enter the status");
  let ob = {
    id: id,
    item: item,
    status: status,
  };
  todoList.push(ob);
}
function changeStatus() {
  console.log("Changing the status");
  id = prompt("Enter the id that should be updated");
  const obj_up = todoList.find((obj) => obj.id === id);
  console.log(
    "Here's the task:",
    obj_up.id,
    "--->",
    obj_up.item,
    "--->",
    obj_up.status
  );
  const change_status = prompt("Do u want to change status as completed?");
  if (change_status === "yes") {
    if (obj_up.status === "not completed") {
      obj_up.status = "completed";
      console.log(obj_up.id, obj_up.item, obj_up.status);
    } else {
      obj_up.status = "not completed";
      console.log(obj_up.id, obj_up.item, obj_up.status);
    }
  } else {
    console.log("Continue with current status");
  }
}
function listAllTodos() {
  let completed = todoList.filter((todo) => todo.status === "completed");
  let notCompleted = todoList.filter((todo) => todo.status === "not completed");
  console.log("Completed: ");
  for (let i of completed) {
    console.log(" " + i.item);
  }
  console.log("------------");
  console.log("Not completed: ");
  for (let i of notCompleted) {
    console.log(" " + i.item);
  }
}
function deleteID() {
  console.log("Deleting based on given id");
  id = prompt("Enter the id to be deleted");
  const dele = todoList.findIndex((i) => i.id == id);
  todoList.splice(dele, 1);
  console.log("After deletion", todoList);
}
function deleteCompleted() {
  todoList.forEach((todo, i) => {
    if (todo.status === "completed") {
      todoList.splice(i, 1);
    }
  });
}
function main() {
  let choice;
  while (true && choice != 6) {
    console.log(
      "1.Create 2.Status Change 3.DisplayList 4.Delete using ID 5.Delete the completed ones 6.Exit"
    );
    choice = Number.parseInt(prompt("Enter the choice"));
    switch (true) {
      case choice == 1:
        create();
        break;
      case choice == 2:
        changeStatus();
        break;
      case choice == 3:
        listAllTodos();
        break;
      case choice == 4:
        deleteID();
        break;
      case choice == 5:
        deleteCompleted();
        break;
      case choice == 6:
        break;
      default:
        console.log("Invalid choice");
    }
  }
}
main();
