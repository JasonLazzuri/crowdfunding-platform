import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;
    })
  }

  submitForm(amountDonated: string) {
    var initialAmount = this.projectToDisplay.raisedMoney;
    var newAmount = parseInt(initialAmount) + parseInt(amountDonated);
    var projectToUpdate = this.projectToDisplay;
    projectToUpdate.raisedMoney = newAmount;
    this.projectService.updateProject(projectToUpdate);
  }

}
