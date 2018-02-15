import React, {Component} from 'react';
import SearchBar from './SearchBar';


export default class Header extends Component{
  render(){
    return(
      <div className = 'header'>
        <img className = 'image'src= 'https://cdn.cp.adobe.io/content/2/dcx/0f4d89b2-f2d9-489b-a2df-191359bcfa1c/rendition/preview.jpg/version/3/format/jpg/dimension/width/size/1200'/>
        <SearchBar />
        
      </div>
    )
  }
}