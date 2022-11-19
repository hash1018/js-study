/*
document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');

    textArea.addEventListener('keyup', (event) => {
        const length = textArea.value.length;
        h1.textContent = `글자 수: ${length}`;
    });
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {

    //const h1 = document.querySelector('h1');
    const h1 = document.createElement('h1');
    const print = (event) => {
        let output = '';
        output += `alt: ${event.altKey}<br>`;
        output += `ctrl: ${event.ctrlKey}<br>`;
        output += `shift: ${event.shiftKey}<br>`;
        output += `code: ${event.code !== undefined? event.code: event.keyCode}<br>`;
        h1.innerHTML = output;
    };
    
    document.addEventListener('keydown', print);
    document.addEventListener('keyup', print);

    document.body.appendChild(h1);
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    
    const star = document.createElement('h1');
    star.textContent = '★';
    star.style.position = 'absolute';

    let [x,y] = [0, 0];
    const block = 20;

    const print = () => {
        star.style.left = `${x * block}px`;
        star.style.top = `${y * block}px`;
    };
    print();
    
    document.body.appendChild(star);

    const [left, up, right, down] = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    document.body.addEventListener('keydown', (event) => {
        switch (event.key) {
            case left:
                x -= 1;
                break;
            case up:
                y -= 1;
                break;
            case right:
                x += 1;
                break;
            case down:
                y += 1;
                break;
        }
        print();
    });

});
*/

/*
const listener = (event) => {
    const length = event.currentTarget.value.length;
    const h1 = document.querySelector('h1');
    h1.textContent = `${length}`;  
};

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');
    textarea.addEventListener('keyup', listener);
});

*/

/*
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const p = document.querySelector('p');

    button.addEventListener('click', () => {
        const inch = Number(input.value);

        if (isNaN(inch)) {
            p.textContent = 'input number';
            return;
        }

        const cm = inch * 2.54;
        p.textContent = `${cm}cm`;
    });

});
*/

/*
document.addEventListener('DOMContentLoaded', () => {

    const input = document.createElement('input');
    const p = document.createElement('p');
    const isEmail = (value) => {
        return (value.indexOf('@')>1) && (value.split('@')[1].indexOf('.') > 1);
    }

    input.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value;
        if (isEmail(value)) {
            p.style.color = 'green';
            p.textContent = `email ${value}`;
        }
        else {
            p.style.color = 'red';
            p.textContent = `not email ${value}`;
        }
    });

    document.body.appendChild(input);
    document.body.appendChild(p);
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    const select = document.createElement('select');
    const p = document.createElement('p');

    var option = document.createElement('option');
    option.textContent = '1';
    select.options.add(option);

    option = document.createElement('option');
    option.textContent = '2';
    select.options.add(option);

    option = document.createElement('option');
    option.textContent = '3';
    select.options.add(option);

    option = document.createElement('option');
    option.textContent = '4';
    select.options.add(option);

    select.addEventListener('change', (event) => {
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        p.textContent = `선택 ${options[index].textContent}`;
    })


    document.body.appendChild(select);
    document.body.appendChild(p);
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {

    const select = document.createElement('select');
    const p = document.createElement('p');

    select.multiple = true;

    var option = document.createElement('option');
    option.textContent = '1';
    select.options.add(option);

    option = document.createElement('option');
    option.textContent = '2';
    select.options.add(option);

    option = document.createElement('option');
    option.textContent = '3';
    select.options.add(option);

    option = document.createElement('option');
    option.textContent = '4';
    select.options.add(option);

    select.addEventListener('change', (event) => {
        const options = event.currentTarget.options;
        const list = [];

        for (const option of options) {
            if (option.selected) {
                list.push(option.textContent);
            }
        }
        p.textContent = `선택 ${list.join(',')}`;
    });

    document.body.appendChild(select);
    document.body.appendChild(p);
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    let current;
    let convertedConstValue = 10;

    const select = document.createElement('select');
    const input = document.createElement('input');
    const span = document.createElement('span');

    var option = document.createElement('option');
    option.value = '10';
    option.textContent = 'mm';
    select.options.add(option);

    var option = document.createElement('option');
    option.value = '0.01';
    option.textContent = 'm';
    select.options.add(option);

    var option = document.createElement('option');
    option.value = '0.393701';
    option.textContent = 'inch';
    select.options.add(option);

    input.type = 'text';
    

    const calculate = () => {
        span.textContent = (current * convertedConstValue).toFixed(2);
    };

    select.addEventListener('change', (event) => {
        const options = event.currentTarget.options;
        const index = event.currentTarget.selectedIndex;
        convertedConstValue = Number(options[index].value);
        calculate();
    });

    input.addEventListener('keyup', (event) => {
        current = Number(event.currentTarget.value);
        calculate();
    });

    document.body.appendChild(input);
    document.body.appendChild(span);
    document.body.appendChild(select);


    input.insertAdjacentText('afterend', 'cm=');
})
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    let [timer, timerId] = [0, 0];
    const h1 = document.createElement('h1');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';


    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            timerId = setInterval(() => {
                timer += 1;
                h1.textContent = `${timer} sec`;
            }, 1000);
        }
        else {
            clearInterval(timerId);
        }
    });

    document.body.appendChild(h1);
    document.body.appendChild(checkbox);
})
*/

/*

document.addEventListener('DOMContentLoaded', () => {

    const output = document.createElement('h3');
    const radios = [];

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'pet';
    radio.value = 'a';
    radios.push(radio);

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'pet';
    radio.value = 'b';
    radios.push(radio);

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'pet';
    radio.value = 'c';
    radios.push(radio);

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'pet';
    radio.value = 'd';
    radios.push(radio);

    radios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const current = event.currentTarget;
            if (current.checked) {
                output.textContent = `${current.value}`;
            }
        });
        document.body.appendChild(radio);
    });
    document.body.appendChild(output);
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.createElement('img');
    imgs.src = 'http://placekitten.com/300/300';
    imgs.alt = '';

    imgs.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    })

    document.body.appendChild(imgs);
});
*/

/*
document.addEventListener('DOMContentLoaded', () => {
    let status = false;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', (event) => {
        status = event.currentTarget.checked;
    });

    const link = document.createElement('a');
    link.href = 'http://hanbit.co.kr';
    link.textContent = '한빛미디어';
    link.addEventListener('click', (event) => {
        if (!status) {
            event.preventDefault();
        }
    });

    document.body.appendChild(link);
    document.body.appendChild(checkbox);

});
*/

/*

document.addEventListener('DOMContentLoaded', () => {
    const input = document.createElement('input');
    const todoList = document.createElement('div');
    const addButton = document.createElement('button');
    
    input.id = 'todo';
    todoList.id = 'todo-list';
    addButton.id = 'add-button';
    addButton.textContent = '추가하기';
    
    document.body.appendChild(input);
    document.body.appendChild(addButton);
    document.body.appendChild(todoList);

    let keyCount = 0;

    const addTodo = () => {
        if (input.value.trim() === '') {
            return;
        }

        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const text = document.createElement('span');
        const button = document.createElement('button');

        const key = keyCount;
        keyCount += 1;

        item.setAttribute('data-key', key);
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todoList.appendChild(item);

        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (event) => {
            item.style.textDecoration = event.target.checked? 'line-through' : '';
        });

        text.textContent = input.value;

        button.textContent = '제거하기';
        button.addEventListener('click', () => {
            removeTodo(key);
        })

        input.value = '';
    };

    const removeTodo = (key) => {
        const item = document.querySelector(`[data-key="${key}"]`);
        todoList.removeChild(item);
    }

    addButton.addEventListener('click', addTodo);
    input.addEventListener('keyup', (event) => {
        const ENTER = 13;
        if (event.keycode === ENTER) {
            addTodo();
        }
    });
});

*/

/*
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.createElement('textarea');
    const h1 = document.createElement('h1');

    document.body.appendChild(h1);
    document.body.appendChild(textarea);

    let timerId;

    textarea.addEventListener('focus', (event) => {
        timerId = setInterval(() => {
            const length = textarea.value.length;
            h1.textContent = `글자 수: ${length}`;
        }, 50);
    });

    textarea.addEventListener('blur', (event) => {
        clearInterval(timerId);
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const p = document.createElement('p');
    const input = document.createElement('input');
    const button = document.createElement('button');
    input.type = 'text';
    button.textContent = '지우기';
    
    document.body.appendChild(p);
    document.body.appendChild(button);
    document.body.appendChild(input);

    const savedValue = localStorage.getItem('input');
    if (savedValue) {
        input.value = savedValue;
        p.textContent = `이전 실행 때의 마지막 값: ${savedValue}`;
    }

    input.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value;
        localStorage.setItem('input', value);
    });

    button.addEventListener('click', () => {
        localStorage.clear();
        input.value = '';
    });


});