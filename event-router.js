// event-router.js

function reflectChartObj(bindObj,eventTrigger){
    this.src = bindObj
    this.trigger = eventTrigger
}

function EventTrigger(bindObj){
    this.bond = bindObj
    this.handlers = {}
    this.addHandler = function addHandler(handler){
        this.bond.push(bindObj)
        this.handlers[handler.event] = handler.handleFunc
    }
    this.launch = function launch(event){
        this.handlers[event]()
    }
    this.removeHandler = function removeHandler(event){
        this.handlers[event] = undefined
    }
}

function EventRouter(){
    this.reflectChart = []
    this.addReflectChart = function addReflectChart(reflectChartObj){
        this.reflectChart.push(reflectChartObj)
    }
    this.listener = new Proxy(this.reflectChart,{})
}