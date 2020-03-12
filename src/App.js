import React from 'react';
import ProtoTypes from 'prop-types';

function Food({name, image, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: ProtoTypes.string.isRequired,
  image: ProtoTypes.string.isRequired,
  rating: ProtoTypes.number.isRequired
}

const foodIlike = [
  {id: 1, 
    name: "kimchi", 
    image: "https://blogfiles.pstatic.net/20120821_46/daesoop301_1345510791149pHwN8_JPEG/%C6%F7%B1%E2%B1%E8%C4%A1.jpg",
    rating: 5.5},
  {id: 2, 
    name: "samgyobsal", 
    image: "http://blogfiles.naver.net/20140303_202/samsubk_1393819190486AofzR_JPEG/%BB%EF%B0%E3%BB%EC3.jpg",
    rating: 2.3},
  {id: 3, 
    name: "bibimbap", 
    image: "http://blogfiles.naver.net/20150226_125/gvogong1388_1424916521020HsweG_JPEG/%C0%FC%C1%D6%BF%A1_%BF%C0%B8%E9_%B2%C0_%C0%CC%B0%C7_%B8%D4%BE%EE%BE%DF%C7%D1%B4%D9BEST_%C3%DF%C3%B5%C7%D8%B5%E5%B7%C1%BF%E41.jpg",
    rating: 3.5}
];

function FoodMap(dish){
  return <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>;
}

function App() {
  return (
  <div className="App">
    <h1>Hello!</h1>
    {foodIlike.map(FoodMap)}
  </div>
  );
}

export default App;