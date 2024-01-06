import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public resultAdd:number=0;
  public resultSub:number=0;
  
  constructor(obj:ArithmaticService){
    this.resultAdd=obj.addition(10,11);
    this.resultSub=obj.substration(21,11);
  }
}
