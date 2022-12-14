fetch('https://date.nager.at/api/v3/publicholidays/2017/AT')
.then(res=> res.json())
.then(data=> {
    console.log(data);
    data.forEach(element => {
        document.getElementById('data').innerHTML +=`
        <tr>
            <td>${element.date}</td>
            <td>${element.localName}</td>
            <td>${element.name}</td>
            <td>${element.countryCode}</td>
            <td>${element.fixed}</td>
           
        </tr>`
        
    });})
.catch(e=> console.log(e))