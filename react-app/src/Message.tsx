
//follow PascalCasing
function Message(){

    //JSX: Javascript XML
    const name = "";
    const mess = <h1>Hello {name}</h1>;
    if(name)
        return mess
    return <h1>Hello World</h1>;
}

export default Message;