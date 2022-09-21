import React from 'react'
import mockRacoonArray from '../mockRacoon'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap'

const RacoonShow = ({mockRacoon}) => {
    
    const { id } = useParams()
    let currentRacoonProfile = mockRacoon.find(value => value.id === +id)


    return (
        <>
        <Card
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Card"
                src={currentRacoonProfile.img}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {currentRacoonProfile.name}
                </CardTitle>
                <CardText>
                  {currentRacoonProfile.age}
                </CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  {currentRacoonProfile.hobbies}
                </ListGroupItem>
                <ListGroupItem>
                  {currentRacoonProfile.dislikes}
                </ListGroupItem>
              </ListGroup>
        </Card>
      </>
    )
}


export default RacoonShow