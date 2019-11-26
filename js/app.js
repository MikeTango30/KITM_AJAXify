'use strict';

let myRequest = new XMLHttpRequest();

// myRequest.onreadystatechange = function  () {
//     if (myRequest.readyState === 4) {
//         if (myRequest.status === 200) {
//             document.querySelector('.trust').innerHTML = myRequest.responseText;
//         }
//     }
// };
//
// myRequest.open('GET', 'data.html');
// document.querySelector('button').addEventListener('click', function () {
//    myRequest.send();
//    document.querySelector('button').style.display = "none";
// });

myRequest.onreadystatechange = function () {
    if(myRequest.readyState === 4) {
        let pupils = JSON.parse(myRequest.responseText);
        for (let pupil of pupils) {
            const list = document.querySelector('.trust');

            const wrapper = document.createElement('div');
            const pillMsg = document.createElement('span');
            const pupilName = document.createElement('h5');

            pupilName.textContent = pupil.name;

            pillMsg.classList.add("badge", "badge-pill");
            pillMsg.classList.add("badge-success");
            pillMsg.textContent = 'Yra';

            if (!pupil.location) {
                pillMsg.classList.remove("badge-success");
                pillMsg.classList.add("badge-danger");
                pillMsg.textContent = 'Nėra';
            }

            wrapper.appendChild(pillMsg);
            wrapper.appendChild(pupilName);
            list.appendChild(wrapper);
        }
    }
};

myRequest.open('GET', 'repositories/pupils.json');
myRequest.send();
