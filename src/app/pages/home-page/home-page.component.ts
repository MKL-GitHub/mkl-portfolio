import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  private timeoutId: any = null;

  constructor(private clipboard: Clipboard) { }

  showCopiedObj: string | null = null;

  copyGithub(obj: any) {
    this.clipboard.copy('https://github.com/MKL-GitHub');
    this.showCopied(obj);
  }

  copyPhone(obj: any) {
    this.clipboard.copy('+79604783995');
    this.showCopied(obj);
  }

  private showCopied(obj: any) {
    this.showCopiedObj = obj;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.showCopiedObj = null, 1000);
  }
}
