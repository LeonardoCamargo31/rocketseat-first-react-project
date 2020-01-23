import React , {Component, Fragment} from 'react'
import TechItem from './TechItem'

export default class TechList extends Component{
  state = {
    newTech:'',
    techs:[]
  }

  // assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs')
    if(techs){
      this.state({techs: JSON.parse(techs)})
    }
  }

  // assim as props ou state for atualizado
  componentDidUpdate(prevProps,prevState){
    //prevProps propriedades antigas
    //prevState estado antigo

    //this.props
    //this.state
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  
  // quando o componente deixa de existir
  componentWillMount(){
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