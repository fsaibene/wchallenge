import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-woloxers',
  templateUrl: './woloxers.component.html',
  styleUrls: ['./woloxers.component.css']
})
export class WoloxersComponent {
  public loaded: boolean = true;
  public faTwitter = faTwitter;

  constructor() { }
}
