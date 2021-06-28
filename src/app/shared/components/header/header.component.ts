import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SavedService } from '../../services/saved.service';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private scrollTop: number = 0;
  private savedSub: Subscription | null = null;
  public hideNav: boolean = false;
  public savedTechs: Array<string> = new Array<string>();

  @ViewChild("header", { static: true }) header: ElementRef | null = null;
  @ViewChild("links", { static: true }) links: ElementRef | null = null;

  constructor(private router: Router, public sessionService: SessionService, private savedService: SavedService) { 
  }
  
  ngOnInit(): void {
    this.savedSub = this.savedService.savedTechs$.subscribe(list => {
      this.savedTechs = list;
    })
  }

  ngOnDestroy(): void {
    if(this.savedSub) {
      this.savedSub.unsubscribe();
    }
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

  logout(): void {
    this.sessionService.logout();
    this.router.navigateByUrl("/home")
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
