import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  selectedStudent: Student;

  student: Student = {
    id: 1,
    name: 'Petar Petrovic',
    gender: 'Male',
    description: 'cool'
  };
  // student = 'Petar Petrovic'


  constructor() { }

  ngOnInit() {
  }

  onSelectedStudent(student) {
    this.selectedStudent = student;
  }


}
