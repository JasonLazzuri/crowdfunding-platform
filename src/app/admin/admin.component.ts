import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, projectManager: string, desiredMoney: number, raisedMoney: number) {
    var newProject: Project = new Project(title, description, projectManager, desiredMoney, raisedMoney);
    this.projectService.addProject(newProject);
  }

}
