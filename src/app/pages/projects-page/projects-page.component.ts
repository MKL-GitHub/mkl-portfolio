import { Component, OnInit, ElementRef, ViewChild, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { projects } from 'src/app/data/projects';
import { IProject } from 'src/app/models/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {
  constructor(
    public githubService: GithubService,
    private elementRef: ElementRef,
  ) { }


  ngOnInit(): void {
    // const options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.5,
    // };

    // const observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       // entry.target.classList.add('visible');
    //       // observer.unobserve(entry.target);
    //     }
    //   });
    // }, options);
    // 
    // const animatedElements = this.elementRef.nativeElement.querySelectorAll('.fade-in');

    // console.log(animatedElements)
    // animatedElements.forEach((li: any) => {
    //   console.log(li)
    //   console.log('in')
    // })
    // const animatedElements = this.projectsUl.nativeElement.
    // console.log(this.projectsUlRef.nativeElement.children)
    // for (const li of this.projectsUlRef.nativeElement.children) {
    //   console.log(li)
    // }
    // this.projectsRefs.forEach(e => {
    //   console.log(e)
    // })
    // console.log('onInit', this.projectsRefs)
  }

  ngAfterViewInit(): void {
    const options = {
      // root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const lis = this.elementRef.nativeElement.querySelectorAll('.fadeIn');

    for (const li of lis) observer.observe(li);
  }

  projects: IProject[] = projects as IProject[];
}
