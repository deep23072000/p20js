async function datafetching(){
    let data = await fetch('https://jsonplaceholder.typicode.com/photos');
    let response = await data.json();
    document.getElementById('show').innerHTML = response.map(e=>`
    <div>${e.id}</div>
    <div>${e.albumId}</div>
    <div>${e.title}</div>
    <img src='${e.thumbnailUrl}'>`).join(" ")
} 

datafetching()