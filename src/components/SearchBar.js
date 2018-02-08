import React from 'react';

class SearchBar extends Component {
  render(){
    return(
      <div> 
        <form>
          <input
            type = "search"
            placeholder = "Search by City"
          />
        </form>
      </div>
      )
  }
}