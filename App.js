
//  const displayMessage = (isConfirmed, isFormSubmitted) =>{
//     if(isFormSubmitted){
//       if(isConfirmed) {
//         return <ValidationMessage txt="jest ok"/>
//     } else {
//         return <ValidationMessage txt="nie jest ok"/>
//     }
// } else {return null}
// }


const ValidationMessage = (props) =>{ 
    const {txt} = props
return (
<p>{txt}</p>
)
}

const OrderForm = (props) => {
    const {submit, isConfirmed, change} = props;
    return(
    <form onSubmit = {submit}>
    <input type="checkbox" id="age" class="checkbox" onChange={change} checked={isConfirmed}/>
    <label htmlFor="age">Mam conajmniej 16 lat</label>
    <br />
    <button type="submit">Kup bilet</button>
    </form>
    )
    }

class TicketShop extends React.Component {
    state ={
        isConfirmed: false,
        isFormSubmitted: false,
    }
   handleCheckboxChange = () => {
       this.setState({
           isConfirmed : !this.state.isConfirmed,
           isFormSubmitted: false,
       })
   }

handleFormSubmit = (e) =>{
e.preventDefault()
if(!this.state.isFormSubmitted) {
this.setState({
    isFormSubmitted: true
})
}
}

displayMessage = () =>{
    if(this.state.isFormSubmitted){
      if(this.state.isConfirmed) {
        return <ValidationMessage txt="Gratulacje! Udało Ci się kupić bilet"/>
    } else {
        return <ValidationMessage txt="Ups... jesteś za młody"/>
    }
} else {return null}
}

    render() {
const {isConfirmed, isFormSubmitted} = this.state
   return( 
      <>
       <h1>Kup bilet na horror</h1>
      <OrderForm 
      change={this.handleCheckboxChange} 
      submit={this.handleFormSubmit} 
      checked={isConfirmed}/>
       {this.displayMessage()}

       </>
      )
    }
  }
  
  
  ReactDOM.render(<TicketShop />, document.getElementById('root'))