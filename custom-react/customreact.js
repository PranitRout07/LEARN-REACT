function customerRender(reactElement,mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // mainContainer.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        console.log(prop)
        domElement.setAttribute(prop,reactElement.props[prop])
        
    }


    mainContainer.appendChild(domElement)
}

const mainContainer = document.querySelector("#root")
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


customerRender(reactElement,mainContainer)