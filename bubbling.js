const refs = {
  parrent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

refs.parrent.addEventListener("click", (e) => {
  console.log("parrent clicked");
  console.log("e target ->", e.target);
  console.log("e currentTarget ->", e.currentTarget);
});

refs.child.addEventListener("click", (e) => {
  console.log("child clicked");
  console.log("e target ->", e.target);
  console.log("e currentTarget ->", e.currentTarget);
});

refs.innerChild.addEventListener("click", (e) => {
  console.log("inner child clicked");
  console.log("e target ->", e.target);
  console.log("e currentTarget ->", e.currentTarget);
});