import React from 'react'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const RacoonIndex = ({ mockRacoon }) => {
  // console.log(mockRacoon)
  
  return (
    <>
    <div>
      <h1>All Raccoons</h1>
      { mockRacoon?.map((value, index) => {
        return (
          <>
              <Card
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Card"
                    src={value.img}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {value.name}
                    </CardTitle>
                    <CardText>
                      {value.age}
                    </CardText>
                  </CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                      {value.hobbies}
                    </ListGroupItem>
                    <ListGroupItem>
                      {value.dislikes}
                    </ListGroupItem>
                    <ListGroupItem>
                    <NavLink to = {`/racoonshow/${value.id}`}>
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