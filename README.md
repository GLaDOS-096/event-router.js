# event-router.js

*an easy event router for managing binded events on pages*

~~author: GLaDOS-096~~

## Constructions

### First the code.

```javascript
var counter = 5
var mainRouter = new EventRouter()

var trigger = new EventTrigger(counter)
var zeroHandler = new EventHandler("zero",function(){
    console.log("zero limit reached")
})
var reflectObj = new ReflectChartObj(counter,trigger)

trigger.addHandler(zeroHandler)
mainRouter.addReflectChart([reflectObj])

var __timer__ = setInterval(function(){
    counter = counter - 1
    if (counter==0){
        trigger.launch("zero")
    }
},500)

// when counter reached 0, we're able to see the log "zero limit reached"
```

In the example above, we can see 4 classes this router includes: 
`EventRouter()`,`EventTrigger()`,`ReflectChartObj()`,`EventHandler()`. 

Here I list the dependency chart fo these classes.
```javascript
EventRouter()
    [ReflectChartObj()
        EventTrigger()
            EventHandler()
            EventHandler()
     ReflectChartObj()
        EventTrigger()
            EventHandler()
     ReflectChartObj()
        EventTrigger()
            EventHandler()
            EventHandler()
            EventHandler()
    ]
```

### Property instructions

`EventHandler()`

This is the basic object class of the whole router. It binds a certain event name with a certain 'callback' function. In this way, we will be able to manage all the similar events with the same function.

`EventTrigger()`

This is the deploying class of the router, which means the event triggers from here. It binds a certain object with a group of defined events.

`ReflectChartObj()`

This is the manage layer of the router. It registers all the objects with their binded triggers.

`EventRouter()`

Finally! This is the final event router layer of the module. It monitors any changes in the sataes of the whole router. Perhaps in the future it can be used to trigger events automatically. The monitor is based on the ES6 keyword 'Proxy' which meeans it cannot run on most browsers right now.