const form = document.querySelector('form')

form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Pleae give a valid Height ${height}`
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight) ){
        results.innerHTML = `Pleae give a valid Height ${Weight}`
    } else {
        const bmi = (Weight / ((height * height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`
    }


})