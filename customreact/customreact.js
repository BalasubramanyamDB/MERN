reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click to visit new page"
}

const container = document.querySelector('#root')

function renderElement(element, container){
    const domElement = document.createElement(`${element.type}`)
    domElement.innerHTML = element.children
    domElement.setAttribute('href', `${element.props.href}`)
    domElement.setAttribute('target',element.props.target)
    container.appendChild(domElement)
}
renderElement(reactElement, container)