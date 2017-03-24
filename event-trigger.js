// event-router.js

function EventTrigger(bindObj){
    this.bond = bindObj
    this.addHandler = function addHandler(handler){
        var keyname = "on"+handler.event
        bindObj[keyname] = handler.handleFunc
    }
    this.launch = function launch(event){
        var keyname = "on"+handler.event
        bindObj[keyname]()
    }
    this.removeHandler = function removeHandler(handler){
        var keyname = "on"+handler.event
        bindObj[keyname] = undefined
    }
}