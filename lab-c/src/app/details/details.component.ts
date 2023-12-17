import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  personId?: number;
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personLsService: PersonLsService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personId = params['id'];
      this.person = this.personId
        ? this.personLsService.getPerson(this.personId)
        : undefined;
    });
  }
}
