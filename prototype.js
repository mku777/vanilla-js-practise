const counter = {
    value: 0,
    increment() {
        console.log(this)
        this.value += 1;
    },
    decrement() {
        console.log(this)
        this.value -= 1;
    },
}

const inButton = document.querySelector(".increment");
const deButton = document.querySelector(".decrement");
const count = document.querySelector(".counter");

inButton.addEventListener("click", function () {
    console.log('клик увеличить');
    counter.increment()
    count.textContent = counter.value;
});

deButton.addEventListener("click", function () {
  console.log("клик уменьшить");
  counter.decrement();
  count.textContent = counter.value;
});

