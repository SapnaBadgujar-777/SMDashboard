document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  const totalStudents = document.getElementById("totalStudents");

  function updateTotalStudents() {
    totalStudents.textContent = table.rows.length;
  }

  updateTotalStudents();

  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    for (let row of table.rows) {
      const name = row.cells[1].textContent.toLowerCase();
      if (name.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
});
