/**
 * Created by Josh on 3/5/2015.
 */
import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {ShadowDomStrategy, NativeShadowDomStrategy} from 'angular2/src/core/compiler/shadow_dom_strategy';
import {MessageComponent} from 'message';
import {MessageService} from 'message-service';

// Annotation section
@Component({
    selector: 'my-app',
    services:[MessageService]
})
@Template({
    url: 'app.html',
    directives: [Foreach, MessageComponent]
})
class MyAppComponent {

    constructor(messageService: MessageService) {
        this.messages = [];
        this.messageService = messageService;
    }

    addMessages(numMessagesStr){
        var numMessages = parseInt(numMessagesStr);
        numMessages = isNaN(numMessages) ? 10 : numMessages;

        this.messageService.generateRandomMessages(numMessages)
            .then(newMessages => {
                this.messages = this.messages.concat(newMessages);
            })
    }

    updateValue($event, newMsg){
        if($event.which === 13) {
            this.messages.push(newMsg.value);
            newMsg.value = '';
        }
    }
}

var shadowDomBindings = [
    bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)
];

bootstrap(MyAppComponent
    //,shadowDomBindings // <-- Uncomment this line to use Shadow DOM
    );