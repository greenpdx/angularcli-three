import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Three3dService } from './three3d.service';
import { Observable, Observer, Subject } from 'rxjs';



@Component({
  selector: 'three3d',
  templateUrl: './three3d.component.html',
  styleUrls: ['./three3d.component.css'],
  providers: [Three3dService]
})
export class Three3dComponent implements OnInit {
    element: HTMLElement;
    userEvt: Subject<any>;
//    private three3d: Three3dService;

    constructor(private three3d: Three3dService) {
//    constructor() {
//        this.three3d = new Three3dService(this)
        this.userEvt = new Subject();
    }

    ngOnInit() {
        let bob = 1;
        this.three3d.component = this;
    }

    ngAfterViewInit() {
        let ele = document.getElementById("three3d");
        if (ele) {
            this.element = ele;
            this.three3d.init(ele);
        }

    }

}
