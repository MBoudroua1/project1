import { Component, OnInit, Input, EventEmitter } from "@angular/core";

@Component({
    selector: '',
    template: './hello.componet.html'
})

export class Hello implements OnInit{
    @Input() event=new EventEmitter<string>(); 
    private name: string; 
    private age: number; 
    private number: number;
    constructor(){  }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
    onSelectAge(){
        this.name= 
    }
}