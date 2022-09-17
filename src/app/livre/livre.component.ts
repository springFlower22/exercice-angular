import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent implements OnInit {

  @Input() livreName: String = "";
  @Input() auteurName: String = "";
  @Input() price: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
