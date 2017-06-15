import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }
  beginDeletingProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
