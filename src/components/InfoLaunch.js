export const InfoLaunch = (img, name, details, flightNumber) => {
    const container = document.createElement('article')
    container.classList.add('flex','gap-y-4','flex-col','items-center')

    container.append(imgElement(img,name),titleElement(flightNumber),titleElement(name),infoElement(details))

    return container
}

const imgElement = (img, name) => {
    const element = document.createElement('img')
    element.classList.add('w-52','h-auto')
    element.src = img
    element.alt = name
    return element
}

const titleElement = (text) => {
    const element = document.createElement('h2')
    element.classList.add('text-4xl','text-white','font-bold')
    element.textContent = `Launch ${text}`
    return element
}

const infoElement = (details) => {
    const element = document.createElement('p')
    element.classList.add('text-lg','text-slate-600','text-center')
    element.textContent = details
    return element
}