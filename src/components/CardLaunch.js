const clsA = ['rounded-lg','border','shadow-md','bg-gray-800','border-gray-700','hover:scale-105','hover:bg-gray-700','hover:border-gray-500','transiton','flex','flex-col','cursor-pointer']

export const CardLaunch = (id, img, success, flightNumber, details) => {
    // principal tag
    const elementA = document.createElement('a')
    elementA.classList.add(...clsA)
    elementA.href = "/launch.html"
    // success text
    const sucessText = success ? "Éxito" : "Fracaso"

    // add Components
    elementA.append(elementPicture(id, img),elementHeader(success,sucessText,flightNumber,details))


    elementA.addEventListener('click',()=>{
        localStorage.setItem('idLauch',id)
    })

    return elementA
}

const elementPicture = (id, img)=>{
    // img Component
    const elementImg = document.createElement('img')
    elementImg.alt = "Patch for launch " + id
    elementImg.src = img
    elementImg.classList.add('mb-5','rounded-lg')
    // picture Component
    const elementPicture = document.createElement('picture')
    elementPicture.classList.add('flex','justify-center','p-4')
    elementPicture.append(elementImg)
    return elementPicture
}

const elementHeader = (success, sucessText, flightNumber, details) => {
    // span style
    const spanStyles = success ? ['bg-green-200','text-green-900']
    : ['bg-red-200', 'text-red-900']

    // span Component
    const elementSpan = document.createElement('span')
    elementSpan.classList.add('text-xs','font-semibold','mr-2','px-2.5','py-0.5','rounded', ...spanStyles)
    elementSpan.innerText = sucessText
    // h2 Component
    const elementH2 = document.createElement('h2')
    elementH2.classList.add('my-2','text-2xl','font-bold','tracking-tight','text-white')
    elementH2.textContent = `Flight #${flightNumber}`
    // p Component
    const elementP = document.createElement('p')
    elementP.classList.add('mb-4','font-light','text-gray-400')
    elementP.textContent =       details != null && details?.length > 100 ? details.slice(0,100) + " ... " : details
    // header Component
    const headerElement = document.createElement('header')
    headerElement.classList.add('p-4','flex-grow')
    headerElement.append(elementSpan,elementH2,elementP)
    return headerElement
}