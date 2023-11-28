/* eslint-disable react/prop-types */
// import * as React from "react";
import {useState} from "react";


const App = () => {
  // Initialize stories array, containing objects
  // These Objects will represent each story and have properties associated
  // to them
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

  // useState is used to set a state value. We get (getter) a value
  // we then set a value (setter). We use Destructuring here.
  const [searchTerm, setSearchTerm] = useState('')
  // console.log to see the value we've set in the console
  // console.log(searchTerm)

  // handler function: This handler will "handle" the search behavior
  // meaning we pass in an event as our argument, and set the searchTerm to be
  // the target's value. event.target.value. This allows the user to input a
  // search term and will become the state value when searching
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }


  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase()
      .includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm}
              onSearch={handleSearch}/>
      <hr/>
      <List list={searchedStories}/>
    </div>


  )
}
export default App

const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID}
            title={item.title}
            item={item}/>
    ))}
  </ul>
)

const Item = ({
                item: {
                  title,
                  url,
                  author,
                  num_comments,
                  points,
                },
              }) => (
  <li>
      <span>
        <a href={url}>{title}</a>
      </span>
    <span> {author}</span>
    <span> {num_comments}</span>
    <span> {points}</span>
    {/* <span> {props.item.url}</span> */}
  </li>
)

const Search = ({search, onSearch}) => {

  return (<div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch}
      />
    </div>
  )
}
//This is a function component