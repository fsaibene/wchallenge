import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.scrollToSection(fragment)
    })
  }

  private scrollToSection(fragment: string | null) {
    if(fragment){
      const section = document.getElementById(fragment);
      if(section){
        section.focus();
        section.scrollIntoView();
      }
    } else {
      this.scrollToSection("welcome");
    }
  }
}
