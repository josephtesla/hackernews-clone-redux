import React from 'react'
import ListItem from "../ListItem/index.js"
import { ListWrapper } from "./styles"

export default function List({stories}) {
  return (
    <div>
      <ListWrapper>
        {
          stories.map(story => (
            <ListItem {...story} key={story.id}/>
          ))
        }
      </ListWrapper>
    </div>
  )
}
