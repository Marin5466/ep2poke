document.getElementById("pokeSearch").addEventListener("click", function(){

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        const randomId = getRandomInt(1, 150); // Obtiene un ID aleatorio entre 1 y 150
        const randomId1 = getRandomInt(1, 150);
        const randomId2 = getRandomInt(1, 150);
        const randomId3 = getRandomInt(1, 150);
        const randomId4 = getRandomInt(1, 150);
        const randomId5 = getRandomInt(1, 150);

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => response.json())
        .then(data => {

            var pokeInfo = document.getElementById("pokeInfo")
            pokeInfo.innerHTML=
            `
            <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">
            <p> ID: ${data.id} </p>
            <p> Name: ${data.name} </p>
            <p> Base Experience: ${data.base_experience}exp </p>
            <p> Height: ${data.height / 10}m </p>
            <p> Weight: ${data.weight / 10}kg </p>
            `;
        })

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId1}`)
        .then(response => response.json())
        .then(data => {

            var pokeInfo1 = document.getElementById("pokeInfo1")
            pokeInfo1.innerHTML=
            `
            <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">
            <p> ID: ${data.id} </p>
            <p> Name: ${data.name} </p>
            <p> Base Experience: ${data.base_experience}exp </p>
            <p> Height: ${data.height / 10}m </p>
            <p> Weight: ${data.weight / 10}kg </p>
            `;
        })

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId2}`)
        .then(response => response.json())
        .then(data => {

            var pokeInfo2 = document.getElementById("pokeInfo2")
            pokeInfo2.innerHTML=
            `
            <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">
            <p> ID: ${data.id} </p>
            <p> Name: ${data.name} </p>
            <p> Base Experience: ${data.base_experience}exp </p>
            <p> Height: ${data.height / 10}m </p>
            <p> Weight: ${data.weight / 10}kg </p>
            `;
        })

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId3}`)
        .then(response => response.json())
        .then(data => {

            var pokeInfo3 = document.getElementById("pokeInfo3")
            pokeInfo3.innerHTML=
            `
            <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">
            <p> ID: ${data.id} </p>
            <p> Name: ${data.name} </p>
            <p> Base Experience: ${data.base_experience}exp </p>
            <p> Height: ${data.height / 10}m </p>
            <p> Weight: ${data.weight / 10}kg </p>
            `;
        })

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId4}`)
        .then(response => response.json())
        .then(data => {

            var pokeInfo4 = document.getElementById("pokeInfo4")
            pokeInfo4.innerHTML=
            `
            <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">
            <p> ID: ${data.id} </p>
            <p> Name: ${data.name} </p>
            <p> Base Experience: ${data.base_experience}exp </p>
            <p> Height: ${data.height / 10}m </p>
            <p> Weight: ${data.weight / 10}kg </p>
            `;
        })

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId5}`)
        .then(response => response.json())
        .then(data => {

            var pokeInfo5 = document.getElementById("pokeInfo5")
            pokeInfo5.innerHTML=
            `
            <img src="${data.sprites.front_default}">
            <img src="${data.sprites.back_default}">
            <p> ID: ${data.id} </p>
            <p> Name: ${data.name} </p>
            <p> Base Experience: ${data.base_experience}exp </p>
            <p> Height: ${data.height / 10}m </p>
            <p> Weight: ${data.weight / 10}kg </p>
            `;
        })

        
        .catch(error => console.error("Error", error));
});


