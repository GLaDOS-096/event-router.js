// event-router.js

function EventHandler(event,handleFunc){
    this.event = event
    this.handleFunc = handleFunc
}

function ReflectChartObj(bindObj,eventTrigger){
    this.src = bindObj
    this.trigger = eventTrigger
}

function EventTrigger(bindObj){
    this.bond = bindObj
    this.handlers = {}
    this.addHandler = function addHandler(eventHandler){
        // console.log(this)
        this.bond = bindObj
        this.handlers[eventHandler.event] = eventHandler.handleFunc
    }
    this.launch = function launch(event,args){
        this.handlers[event](args)
    }
    this.removeHandler = function removeHandler(event){
        this.handlers[event] = undefined
    }
}

function EventRouter(){
    this.__reflectChart__ = []
    this.addReflectChart = function addReflectChart(reflectChartArr){
        var self = this
        reflectChartArr.forEach(function(reflectChartObj){
            // console.log(this)
            self.__reflectChart__.push(reflectChartObj)
        })
    }
    this.reflectChart = new Proxy(this.__reflectChart__,{
        get: function(target,propKey,receiver){
            console.log('get')
            return Reflect.get(target,propKey,receiver)
        },
        set: function(target,propKey,value,receiver){
            console.log('set')
            return Reflect.set(target,propKey,receiver)
        }
    })
}