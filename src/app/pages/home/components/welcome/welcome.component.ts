import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger(
      'enterAnimationStart', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('1s', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
        'enterAnimationFadeIn', [
          transition(':enter', [
            style({opacity: 0}),
            animate('1.5s', style({opacity: 1}))
          ])
        ]
      )
  ]
})
export class WelcomeComponent implements OnInit {
  public loaded: boolean = false;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loaded = true;
    this.cd.detectChanges();
  }
}
