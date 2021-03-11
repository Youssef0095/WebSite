let tabledata = document.getElementById('tabledata')

setInterval(() => {
    tabledata.innerHTML = "";

    fetch("https://iot20func.azurewebsites.net/api/GetDataFromTableStorage?code=oKoS/N0WSJdBa6DQilHc3shcmMduZayZMALHB9xKTJ8Vk5hCRRDUDQ==&limit=5&orderby=desc")
    .then(res => res.json())
    .then(data => {
        for(let row of data) {
            tabledata.innerHTML += `<tr><td>${row.rowKey}</td><td>${row.deviceId}</td><td>${row.timestamp}</td><td>${row.temperature}</td><td>${row.humidity}</td>`
        }
    })   
}, 5000);

