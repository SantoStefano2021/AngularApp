import { Component, Input } from '@angular/core';

@Component({
  selector: 'example-component',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  @Input() name = '';
  
  title = "First custom component";
  count = 0;
  pay() {
    this.count ++;
  }
  eur = 0;

  onInput(val: number) {
    this.eur = val;
  }

  getTitle(): string{
    return this.title;
  }

  propertyBinding = false;
  serverCreation = 'No ServerCreation';

  serverName = 'Test';
  update(event:Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  dataBinding(){
    this.serverName = 'Server was created!' + this.serverName;
  }

  onReset(event: any){
    this.serverName = '';
  }

  server = ['Matteo', 'Giovanni'];

  log = new Array();
  cont = 0;
  Push(){
    this.cont = this.cont + 1;

   this.log.push(this.cont);
  }
}