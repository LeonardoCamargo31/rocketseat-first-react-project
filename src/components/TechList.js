import React , { Component } from 'react'
import TechItem from './TechItem'
import { Container, Row, Col, Button, Input, Form, Label, FormGroup, Table} from 'reactstrap';

class TechList extends Component{
  state = {
    newTech: '',
    techs: [],
  }

  // assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs')
    if(techs){
      this.setState({techs: JSON.parse(techs)});
    }
  }

  // assim as props ou state for atualizado
  componentDidUpdate(prevProps,prevState){
    //prevProps propriedades antigas
    //prevState estado antigo

    //this.props
    //this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  
  // quando o componente deixa de existir
  componentWillMount(){
  }

  handleInputChange = (event)=>{
    // o estado do react é imutavel, assim adicionamos um novo
    this.setState({ newTech: event.target.value })
  }

  handleSubmit = (event)=>{
    event.preventDefault()

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  }

  handleDelete = (tech)=>{
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render(){
    return(
      <Container>
        <Form form onSubmit={this.handleSubmit} className="mt-4 mb-4">
          <Row>
            <FormGroup>
              <Label for="exampleEmail" className="mr-sm-2">Novo item</Label>
              <Input type="text" 
                onChange={this.handleInputChange} 
                value={this.state.newTech}/>
            </FormGroup>
          </Row>
          <Row>
            <Button color="primary" type="submit">Adicionar</Button>
          </Row>
        </Form>
    
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {this.state.techs.map(item => (
                <TechItem 
                  key={item}
                  tech={item} 
                  onDelete={()=>this.handleDelete(item)}
                />
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    )
  }
}

export default TechList;