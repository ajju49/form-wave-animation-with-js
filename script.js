const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
    label.innerHTML = label.innerText.split('')
    //to split the word 'email' we use split function
    // .map((letter,idx) => `<span>${letter}</span>`)

    .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)

    //we dont want new line as array 
    //we want string ,so we use join function
    .join('')
})