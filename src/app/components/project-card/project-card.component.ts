import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() name!: string;
  @Input() languages!: string[];
  @Input() githubUrl!: string;
  @Input() imageUrl: string | undefined;
  @Input() deploymentUrl: string | undefined;
}
