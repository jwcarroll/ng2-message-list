#Shadow DOM vs. Emulated Mode

This is a basic test to look at performance differences between Shadow DOM vs. Emulated mode in Angular 2.0

##Application

This is a simple application that adds a custom component (directive) with event listeners and bindings on it. There are
several buttons for adding increments of 10, 100, 1000, and 5000 messages to the list in order to see how quickly they
are rendered.

##Switching Modes

There is a line in `app.js` that allows you to switch modes between native Shadow DOM and emulated mode.

```
var shadowDomBindings = [
    bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)
];

bootstrap(MyAppComponent
    //,shadowDomBindings // <-- Uncomment this line to use Shadow DOM
    );
```