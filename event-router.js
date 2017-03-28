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
        this.bond.push(bindObj)
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
    this.reflectChart = []
    this.addReflectChart = function addReflectChart(reflectChartArr){
        reflectChartArr.forEach(function(reflectChartObj){
            this.reflectChart.push(reflectChartObj)
        })
    }
    this.listener = new Proxy(this.reflectChart,{
        get: function(target,propKey,value,receiver){},
        set: function(target,propKey,value,receiver){
            console.log(target,propKey,value,receiver)
        }
    })
}