import React from 'react'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const RacoonIndex = ({ racoons }) => {
  // console.log(mockRacoon)
  
  return (
    <>
    <div>
      <h1>All Raccoons</h1>
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
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {racoon.name}
                    </CardTitle>
                    <CardText>
                      {racoon.age}
                    </CardText>
                  </CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                      {racoon.hobbies}
                    </ListGroupItem>
                    <ListGroupItem>
                      {racoon.dislikes}
                    </ListGroupItem>
                    <ListGroupItem>
                    <NavLink to = {`/racoonshow/${racoon.id}`}>
                      Check Me Out! 
                    </NavLink>
                    </ListGroupItem>
                  </ListGroup>
              </Card>
          </>
        )
      })

      }
    </div>
    </>
  )
}

export default RacoonIndex