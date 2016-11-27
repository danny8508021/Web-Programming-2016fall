console.log('hello');

function expandItem(node, event) {
  if (event.keyCode === 13 && node.value.trim()) {
    const text = node.value;
    node.value = '';
    const target = document.getElementsByClassName('todo-list')[0];
    const newLine = document.createElement('li');
    const input = document.createElement('input');
    const image = document.createElement('img');
    const label = document.createElement('label');
    const wrap = document.createElement('div');

    image.classList.add('right-img');
    image.src = './img/png/right.png';

    newLine.classList.add('list');
    newLine.classList.add('effect');

    label.innerHTML = text;
    label.classList.add('line');

    input.type = 'button';
    input.classList.add('toggle');
    input.onclick = (event) => { return complete(event,input,image,label,newLine); }

    wrap.classList.add('line-wrap');

    wrap.appendChild(input);
    wrap.appendChild(label);
    wrap.appendChild(image);
    newLine.appendChild(wrap);
    target.appendChild(newLine);
  }
}

function complete(event, obj, image, text, parent) {
  image.classList.add('show');
  text.classList.add('completed');
  parent.classList.remove('effect');
}
