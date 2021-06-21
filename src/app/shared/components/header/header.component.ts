import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private scrollTop: number = 15;
  public hideNav: boolean = false;

  @ViewChild("header", { static: true }) header: ElementRef | null = null;
  @ViewChild("links", { static: true }) links: ElementRef | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hideToggle(): void {
    if(this.links && this.links.nativeElement){
      this.links.nativeElement.classList.remove("active");
    }
  }

  scrollTo(element: any): void {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  goTo(path: string, frag: string | null): void {
    this.hideToggle();
    let options: any = {};
    if(frag){
      options.fragment = frag;
    }
    this.router.navigate([path], options);
  }

  toggle($event: any): void {
    if(this.links){
      this.links.nativeElement.classList.toggle("active");
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
      let currentScrollPos = window.pageYOffset;
      if(this.header){
        if (this.scrollTop > currentScrollPos) {
          this.header.nativeElement.style.top = "0";
        } else {
          this.header.nativeElement.style.top = "-100px";
        }
      }
      this.scrollTop = currentScrollPos;
  }
}
