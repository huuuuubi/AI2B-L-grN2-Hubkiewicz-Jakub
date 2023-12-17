import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: Person[] = [];

  constructor(
    private personLsService: PersonLsService,
  ) {
  }

  ngOnInit() {
    this.people = this.personLsService.getAll();
  }

  delete(index: number): void {
    if (confirm("Are you sure?")) {
      this.personLsService.deletePerson(index);
      this.people = this.personLsService.getAll();
    }
  }
}
