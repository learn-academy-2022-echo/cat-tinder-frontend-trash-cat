import React from 'react'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './RacoonIndex.css'

const RacoonIndex = ({ racoons }) => {
  
  return (
 
    <div className="title">
      <h1>All Raccoons</h1>
      <div className="project_container">
      { racoons?.map((racoon, index) => {
        return (
          <>
              <Card
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Card"
                    src={racoon.img}
                  className="photo"/>
                  <CardBody className="name">
                    <CardTitle tag="h5">
                      {racoon.name}
                    </CardTitle>
                    <CardText>
                      {racoon.age}
                    </CardText>
                  </CardBody>
                  <ListGroup flush className="list-bg">
                    <ListGroupItem className="list-group">
                      {racoon.hobbies}
                    </ListGroupItem>
                    <ListGroupItem className="list-group">
                      {racoon.dislikes}
                    </ListGroupItem>
                    <ListGroupItem>
                    <Button color="dark">
                    <NavLink to = {`/racoonshow/${racoon.id}`} className="nav">
                      Check Me Out! 
                    </NavLink>
                    </Button>
                    </ListGroupItem>
                  </ListGroup>
              </Card>
          </>
        )
      })
      
    }
    </div>
  
    </div>
  )
}

export default RacoonIndex