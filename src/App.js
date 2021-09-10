import React from "react"; 
import PropTypes from "prop-types";


//react : 내가 여기에 쓰는 모든 요소를 생성, html root부분에 넣는다.
// react가 빠른이유
// 소스코드에 처음부터 html을 넣지 않고, html에서 html을 추가하거나 제거
// application이 이것을 로드할 때 빈 html을 로드하고, 그 다음에 react가 html에 내가 작성한 component를 끼워넣는다.
// virtual DOM? : 버츄얼(존재하지x)

//컴포넌트는 대문자로 시작



const foodILike = [
  {
    rating:1.1,
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    rating:1.2,
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    rating:1.3,
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    rating:1.4,
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  { 
    rating:1.5,
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({name, picture, rating}){
  return (
  <div>
    <h1>i like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} /> 
  </div>
  );
}

Food.propTypes = { //props들의 타입을 확인해줌 
  //required 빼면 props값이 없어도 오류는 안남. 필수라곤 안헀으니까

  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(dish){
  return <Food 
  key={dish.id} 
  name={dish.name} 
  picture={dish.image} 
  rating = {dish.rating} 
  />
}


function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

//jsx 두번째 이해해야되는 것 : 컴포넌트에 정보를 보낼 수 있다.
// 리액트는 재사용 가능한 컴포넌트를 만들 수 있다는 점

//하위 컴포넌트로 정보를 보내고, 하위 컴포넌트가 정보를 사용
// 김치라는 value로 prop name을 줌
// fav라는 이름의 property를 김치라는 값으로 준 것

//함수에 인자로 정보가 전달된다. 
// {fav} << props 오브젝트 안에 들어있는  fav 뜻함. =props.fav

// {foodILike.map(dish => <Food name={dish.name} 
//   picture ={dish.image} />)}


//에러
// 리액트의 모든 element는 유일해야함. 모두 달라보여야됨
// key값을 줘서 리액트가 컴포넌트가 다르다는 것을 구별하도록... 
// alt ={~}는 이미지에 값을 또 주는.. 시각장애인을 위한 것

//prop-types 내가 전달받은 props가 내가 원하는게 맞는지 확인해줌