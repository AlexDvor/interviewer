import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-preview',
  styleUrl: './profile-preview.scss',
  templateUrl: './profile-preview.html',
})
export class ProfilePreview {
  @Input() displayName: string = '';
  @Input() role: string = '';
  @Input() bio: string = '';
  @Input() accentColor: string = '#635bce';
  @Input() nameSize: number = 28;
  @Input() isAvailable: boolean = true;

  @Output() contactRequested = new EventEmitter<string>();

  requestContact():void {
    this.contactRequested.emit(this.displayName)
  }

}
