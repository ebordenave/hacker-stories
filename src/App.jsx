/* eslint-disable react/prop-types */
// import * as React from "react";
import {useState} from "react";


const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://react.dev',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    // console.log(e.target.value)
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch}/>
      <hr />
      <List list={searchedStories}/>
    </div>


  )
}
export default App

const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item}/>
    ))}
  </ul>
)

const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span> {props.item.author}</span>
      <span> {props.item.num_comments}</span>
      <span> {props.item.points}</span>
      {/* <span> {props.item.url}</span> */}
    </li>
  )
}

const Search = ({onSearch}) => {

  return (<div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch}/>
    </div>
  )
}
//This is a function component