import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ascendent: number = 1;
  category: number = 7;

  constructor() { }
  selectForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.selectForm = new FormGroup({
      ascendent: new FormControl(1),
      category: new FormControl(7)
    });
  }

  filter() {
      this.ascendent = this.selectForm.value.ascendent;
      this.category = this.selectForm.value.category
  }

}
