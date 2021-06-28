import { Component, OnInit } from '@angular/core';
import { SavedService } from 'src/app/shared/services/saved.service';
import { SessionService } from 'src/app/shared/session.service';
import { Tech } from '../model/tech';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'app-techs-list',
  templateUrl: './techs-list.component.html',
  styleUrls: ['./techs-list.component.css']
})
export class TechsListComponent implements OnInit {
  public techs: Array<Tech> = new Array<Tech>();
  public displayedTechs: Array<Tech> = new Array<Tech>();
  public filter: string = "";
  public order: string = "asc";
  private saved: Array<string> = JSON.parse(<string>localStorage.getItem('saved'));

  constructor(private techsService: TechService, private sessionService: SessionService, private savedTechs: SavedService) { }
  ngOnInit(): void {
    this.techsService.get().subscribe(response => {
      if(response) {
        let list = response as Array<Tech>;
        this.techs = list;
        this.displayedTechs = this.techs;
        this.onOrder();
        this.setFavourites();
      }
    })
  }
  setFavourites() {
    let savedTechsFromStorage = this.saved;
    for(let tech of this.techs){
      if(savedTechsFromStorage.find(t => t == tech.tech)) {
        tech.favourite = true;
      }
    }
    this.savedTechs.setTechs(this.techs.filter(t => t.favourite).map(t => t.tech));
  }

  private saveTech(techName: string, favourite: boolean) {
    let tech = this.techs.find(t => t.tech == techName);
    if(tech) {
      tech.favourite = favourite;
    }
    this.savedTechs.setTechs(this.techs.filter(t => t.favourite).map(t => t.tech));
    this.addToLocalStorage(techName)
  }

  addToLocalStorage(techName: string) {
    let newList = this.displayedTechs.filter(t => t.favourite).map(t => t.tech);
    this.sessionService.setSavedTechs(newList);
  }

  onSaveTech($event: string): void {
    this.saveTech($event, true);
  }

  onUnsaveTech($event: string): void {
    this.saveTech($event, false);
  }
  onOrder(): void {
    let index1 = this.order == "asc" ? 1 : -1;
    let index2 = this.order == "asc" ? -1 : 1;
    this.displayedTechs = this.techs.sort((a, b) => (a.tech > b.tech ? index1 : index2));
  }
  onSearch(): void {
    this.displayedTechs = this.techs.filter(e => e.type.toLowerCase().includes(this.filter.toLowerCase()) || e.tech.toLowerCase().includes(this.filter.toLowerCase()));
  }
}
