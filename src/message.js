/**
 * Created by Josh on 3/7/2015.
 */
import {Component, Template} from 'angular2/angular2';
import * as utils from 'utils';

var colors = ['363537','8DA7BE','CDE6F5','87919E','707078'];

// Annotation section
@Component({
    selector: 'message',
    bind: {
        'msg':'msg'
    }
})
@Template({
    inline: '<div ' +
    '(mouseenter)="toggleActive(true)" ' +
    '(mouseleave)="toggleActive(false)"' +
    '[style.font-size]="(msg.length) + \'px\'">' +
        '<span [style.color]="color" [style.text-decoration]="isActive ? \'underline\' : \'\'">{{msg}}</span><span [hidden]="!isActive"> - {{msg.length}} Characters</span>' +
    '</div>'
})
class MessageComponent {
    constructor() {
        this.msg = '';
        this.color = '#000000';
        this.isActive = false;

        this.setColor();
    }

    setColor(){
        var index = utils.getRandomInt(0, colors.length);
        this.color = '#' + colors[index];
    }

    toggleActive(isActive){
        this.isActive = isActive;
    }
}

export {MessageComponent};