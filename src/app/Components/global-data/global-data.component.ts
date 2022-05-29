import { Component, Input, OnInit } from '@angular/core';
import { GlobalData } from 'src/app/Models/covid.models';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.scss']
})
export class GlobalDataComponent implements OnInit {
  @Input() global:GlobalData;
  constructor() { }

  ngOnInit(): void {
    
  }

}
