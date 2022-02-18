// btn.onclick = function () {
//     let input = document.getElementById('input');
//     let data = new FormData();
//     data.append('file', input.files[0]);
//     upload(data);
// };
function upload(file) {
    fetch('http://localhost:5000/upload', {
        method: 'POST',
        mode: 'no-cors',
        body: file,
    })
    .then(response => {
        if (response.status == 200) {
            var res = document.getElementById('result');
            res.innerHTML = 'File uploaded successfully';
        }
    })
};

document.getElementById('#btn').addEventListener('click', function (event) {
    let input = document.getElementById('input');
    let data = new FormData();
    data.append('file', input.files[0]);
    upload(data);
    event.preventDefault();
});

