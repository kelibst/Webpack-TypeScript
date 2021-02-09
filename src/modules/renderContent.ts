
const renderContent = (
    state: string,
    task: string,
    description: string,
    container: HTMLUListElement,
    id: number
  ) => {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = task;
    li.append(h4);
  
    const p = document.createElement("p");
    p.innerText = description;
    li.append(p);
  
    const btn = document.createElement("button");
    btn.classList.add("btn-rmv");
    btn.classList.add("btn");
    btn.id = `rmv-${id}`;
  
    btn.innerText = "Remove";
    btn.type = "button";
    const btn1 = document.createElement("button");
    btn1.classList.add("btn-edt");
    btn1.classList.add("btn");
    btn1.id = `edt-${id}`;
    btn1.innerText = "Edit";
    btn1.type = "button";
    li.append(btn1);
    li.append(btn);
    container.append(li);
  };

  export default renderContent;