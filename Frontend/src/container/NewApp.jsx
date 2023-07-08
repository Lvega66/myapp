import React from 'react';
import MyFirstComponent from '../components/MyFirstComponent';
import Card from '../components/Card';


class NewApp extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      appText: "New App State Text",
      todoList: []
    
    }
    }
  
handleUpdateAppText = () => {
    this.setState({
      appText: "New App State Text Updated!"
    })
}

handlePostData = () => {
  let dataToSave = { 
    title: "Save Title", 
    description: "Save Description", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3EMsr-8AjBp-m_febOvDMpIQowfMaMwhDw&usqp=CAU" 
    }
  
    fetch(
      'http://localhost:3001/todo_list', 
      {
        method: "POST", 
        mode: "cors", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify(dataToSave)
      }
    )
    .then(response => response.json()) 
    .then(data => {console.log(data)});
}

fetchMethod  = () => {
  fetch("http://localhost:3001/todo_list")
  .then(response => response.json())
  .then(
    (data) => {
      console.log(data)
      this.setState({ todoList: data })
  });
}

render() {

    return (
        <React.Fragment>
          <div>Hola desde NewApp </div>
          <div>{this.state.appText}</div>
          <MyFirstComponent 
          updateNewAppStateText={this.handleUpdateAppText}
          newAppText={"text from NewApp"}/>
          <div>
            <button onClick={this.fetchMethod}>Fetch Data</button>
          </div>
          <div>
            {
              this.state.todoList.map( (element) => {
                console.log("La lista es: ", element)
                let elementJSON = JSON.parse(element["data"])
                let elementJSON1 = elementJSON.image
                //console.log("La lista es: ", element)
                console.log("La imagen es: ", elementJSON1)
                //return element["data"]
                return <Card 
                  title={elementJSON["title"]}
                  description={elementJSON["description"]}
                  image={elementJSON["image"]}
                >
                </Card>
              }
              )
            }
          </div>
          <div>
            <button onClick={this.handlePostData}>Post Data</button>
          </div>
        </React.Fragment>
    );
}
}
export default NewApp;