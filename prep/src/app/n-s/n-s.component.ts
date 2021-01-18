import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-n-s',
  templateUrl: './n-s.component.html',
  styleUrls: ['./n-s.component.css']
})
export class NSComponent implements OnInit {

   @Input() article: string;
  constructor() { }

  ngOnInit(): void {
  }
}
