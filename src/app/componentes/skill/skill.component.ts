import { Component } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  private progressRef!: NgProgressRef;

  constructor(private progress: NgProgress) {}

  start() {
    this.progressRef = this.progress.ref();
    this.progressRef.start();
  }

  complete() {
    if (this.progressRef) {
      this.progressRef.complete();
    }
  }
}







