import React from "react"; 
class App extends React.Component{
  state = {
    isLoading : true,
    movie: []
  };

  componentDidMount(){ //delay 함수
    setTimeout(()=> {
      this.setState({isLoading : false});
    }, 3000); //6초뒤에 실행
  }
  

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "로딩":"준비됨"}</div>
  }
    
  
}

export default App;
