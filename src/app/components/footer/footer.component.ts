import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
