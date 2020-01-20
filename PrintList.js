import React ,{Component}from 'react';


class List extends Component{
  constructor(){
      super();
      console.log(this.props);
      this.state={
        listfruits: ["Apple", "Mango" , "Orange" , "Grapes"]
        //listfruits: [1,2,3,4]
      }
      
      
  }
  render(){
    return(

        <div className="jumbotron">
        <div className="alert alert-success">
          <p>Hello this is the list component</p>
      <ul className="list-group">
        {this.state.listfruits.map(fruits => (<li key ={fruits} className="list-group-item">{fruits}</li>))}
      </ul>
        
      </div>
      </div>
    );
     
    
  }
}

export default List;
