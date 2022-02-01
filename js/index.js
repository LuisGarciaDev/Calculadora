let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}

//
let toggleSwitch = document.getElementsByClassName('redButton')[0]

        function go_to_1() {
            toggleSwitch.classList.add('horizTranslate1');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            document.querySelector('.content-calculator').style.backgroundColor="hsl(222, 26%, 31%)"
        }

        function go_to_2() {
            toggleSwitch.classList.add('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate1');
            document.querySelector('.content-calculator').style.backgroundColor = "hsl(0, 0%, 90%)"

        }

        function go_to_3() {
            toggleSwitch.classList.add('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate1');
            document.querySelector('.content-calculator').style.backgroundColor = "hsl(268, 71%, 12%)"

        }