# event-router.js

*an easy event router for managing binded events on pages*

~~author: GLaDOS-096~~

## Constructions

First the code.

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
```
