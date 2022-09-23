import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap'

const RacoonShow = ({racoons}) => {
    const { id } = useParams()
    let racoon = racoons.find(racoon => racoon.id === +id)


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
              </ListGroup>
        </Card>
        <NavLink to={`/racoonedit/${racoon.id}`} className="nav-link">
  Edit Raccoon Profile
</NavLink>
      </>
    )
}


export default RacoonShow