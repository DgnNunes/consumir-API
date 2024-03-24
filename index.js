let type = 'stretching';

fetch('https://api.api-ninjas.com/v1/exercises?type=' + type, {
    method: 'GET',
    headers: { 'X-Api-Key': 'r39tgCKGIcWEgPClOnD1JeiydHJa5Kug2hP41Khp'}
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));