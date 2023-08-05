import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() name!: string;
  @Input() languages!: string[];
  @Input() githubUrl!: string;
  @Input() imageUrl: string | undefined;
  @Input() deploymentUrl: string | undefined;

  constructor(private elementRef: ElementRef) {
  }

  lightX: number = 0;
  lightY: number = 0;
  hasLight: boolean = false;

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('mousemove', (event: MouseEvent) => {
      const boundingBox = this.elementRef.nativeElement.getBoundingClientRect();
      const centerX = boundingBox.left + boundingBox.width / 2;
      const centerY = boundingBox.top + boundingBox.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const deltaX = (mouseX - centerX) / 50;
      const deltaY = (mouseY - centerY) / 50;

      this.lightX = event.clientX - boundingBox.left + (deltaX > 0 ? (deltaX * 4) : 0);
      this.lightY = event.clientY - boundingBox.top - (deltaY > 0 ? (deltaY * 4) : 0);

      this.elementRef.nativeElement.style.transition = 'transform 0.3s';
      this.elementRef.nativeElement.style.transform = `rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;

      this.hasLight = true;
    });

    this.elementRef.nativeElement.addEventListener('mouseleave', () => {
      this.elementRef.nativeElement.style.transition = 'transform 2s';
      this.elementRef.nativeElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
      this.hasLight = false;
    });
  }
}
