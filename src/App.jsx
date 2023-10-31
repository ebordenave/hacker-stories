import * as React from "react";

function App() {
  const list = [{
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
    }]

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search"></label>
      <input type="text" id="search"/>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author}</span> <span>{item.num_comments}</span> <span>{item.points}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default App

//This is a function component