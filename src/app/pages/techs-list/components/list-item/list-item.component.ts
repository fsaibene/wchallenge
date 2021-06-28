import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBookmark as faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { Tech } from '../../model/tech';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() tech: Tech | null = null;
  @Output() techSaved: EventEmitter<any> = new EventEmitter<any>()
  @Output() techUnsaved: EventEmitter<any> = new EventEmitter<any>()
  constructor(library: FaIconLibrary) { 
    library.addIcons(fasBookmark, faBookmark);
  }

  ngOnInit(): void {
  }

  save(): void {
    this.techSaved.emit(this.tech?.tech);
  }
  
  unSave(): void {
    this.techUnsaved.emit(this.tech?.tech);
  } 
}
