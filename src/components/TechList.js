import React , {Component, Fragment} from 'react'
import TechItem from './TechItem'

export default class TechList extends Component{
  state = {
    newTech:'',
    techs:[
      'Node.js',
      'React.js',
      'Mongodb'
    ]
  }

  handleInputChange = (event)=>{
    // o estado do react é imutavel, assim adicionamos um novo
    this.setState({newTech:event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.setState({
      techs:[...this.state.techs,this.state.newTech],
      newTech:''
    })
  }

  handleDelete = (tech)=>{
    this.setState({techs:this.state.techs.filter(t=> t !== tech)})
  }

  render(){
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(item => (
              <TechItem 
                key={item} 
                tech={item} 
                onDelete={()=>this.handleDelete(item)}
              />
            ))}
          </ul>
          <input type="text" 
            onChange={this.handleInputChange} 
            value={this.state.newTech}/>
          <button type="submit">Enviar</button>
        </form>
      </Fragment>
    )
  }
}