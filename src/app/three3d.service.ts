import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Observable, Observer, Subject } from 'rxjs';

//import {  List } from 'immutable';
//import { UserEvents } from './user-events';

import { Three3dComponent } from './three3d.component';

@Injectable()
export class Three3dService {
    component: Three3dComponent;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    private controls: OrbitControls;
    private model: THREE.Mesh;
    element: HTMLElement;
    sceneSettings: any;

    public width: number;
    public height: number;
    public top: number;


//    constructor(component: Three3dComponent) {
    constructor() {
        this.sceneSettings = {
            alpha: true,
            antialias: true,
            clearColor:  '#ffffff',
            sortObjects: false,
        }
        //this.component = component;

        this.renderer = new THREE.WebGLRenderer({
            alpha: this.sceneSettings.alpha,
            antialias: this.sceneSettings.antialias
        });
        this.renderer.setClearColor(this.sceneSettings.clearColor, 0);
        this.renderer.sortObjects = this.sceneSettings.sortObjects;

        this.scene = new THREE.Scene();
        this.scene.add(new THREE.AmbientLight(0xcccccc));
        let light = new THREE.DirectionalLight(0xffffff);
        this.scene.add(light);

        let mat = new THREE.MeshPhongMaterial({
            color:0x00cc88,
            opacity: 100

        });


    }

    init(ele: HTMLElement) {;
        this.element = ele;
        let width = ele.clientWidth;
        let height = ele.clientHeight;

        this.width = ele.clientWidth;
        this.height = ele.clientHeight;
        this.top = ele.offsetTop;

        this.camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
        this.camera.position.y = 150;
        this.camera.position.z = 350;
        //this.camera.target.position.y = 150;

        this.renderer.setSize( this.element.clientWidth, this.element.clientHeight );
        this.element.appendChild( this.renderer.domElement );

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        var geometry = new THREE.BoxGeometry( 100, 100, 100 );
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh( geometry, material );

        this.scene.add(cube);
        this.update();

    }

    update() {
        this.animate();
    }

    private animate = () => {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render( this.scene, this.camera);
    }


}
