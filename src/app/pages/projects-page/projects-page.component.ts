import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { projects } from 'src/app/data/projects';
import { IProject } from 'src/app/models/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  constructor(public githubService: GithubService) { }

  projects: IProject[] = projects as IProject[];
}
