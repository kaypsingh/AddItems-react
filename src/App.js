
import React from 'react';
function Task() {
  return (<div>
    <App list={["test", "shivali"]} />
  </div>
  );

}
class App extends React.Component {
  newitem = "";
  constructor(props) {
    super(props)
    this.state = { list: '' }
    this.state.list = this.props.list; 
  }


  change(e) {
    this.newitem = e.target.value;
    console.log(this.newitem);
  }

  getlist(){
  let listyyy = [];
  for (let i of this.props.list){
    listyyy.push(<li>{i}</li>)
  }
return listyyy

  }


  setvalue(e) {
    console.log("click");
    let l = this.state.list; 
    l.push(this.newitem);  
    this.setState(
      { list: l }
    )
    console.log(l)
  }

  
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => { this.change(e) }} />
        <button onClick={(e) => { this.setvalue(e) }}>Add</button>

        {this.getlist()}
        
      </div>
    );
  }
}

export default Task; 
