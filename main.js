function Student(imgUrl, name, unit, course, batch) {
  this.imgUrl = imgUrl;
  this.name = name;
  this.unit = unit;
  this.course = course;
  this.batch = batch;
};

let studentArr = JSON.parse(localStorage.getItem("allStudents")) || [];

function formVal(event) {
  event.preventDefault();

  const form = document.getElementById("form");

  let name = form.name.value;
  let course = form.course.value;
  let unit = form.unit.value;
  let batch = form.batch.value;
  let imgUrl = form.img.value;

  let newStudent = new Student(imgUrl, name, unit, course, batch);

  studentArr.push(newStudent);

  localStorage.setItem("allStudents",JSON.stringify(studentArr));

  // console.log(newStudent);
}

