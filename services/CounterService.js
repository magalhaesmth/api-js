var counter = 0;

module.exports = class CounterService{
    static getCounter(){
        return {counter: counter}
    }

    static increment() {
        counter ++;
        return { counter: counter }
    }

    static decrement() {
        if (counter >= 1) {
            counter --;
        }

        return { counter: counter }
    }
}