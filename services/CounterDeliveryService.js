var counter = [];

module.exports = class CounterDeliveryService{
    
    static getCounterDelivery(){
        return {counter: counter}
    }
    static save(counter) {
        counter.push(counter)
        return {counter: counter}
}

}