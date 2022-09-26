import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button } from 'reactstrap'
import './RacoonShow.css'

const RacoonShow = ({racoons}) => {
    const { id } = useParams()
    let racoon = racoons.find(racoon => racoon.id === +id)


    return (
        <>
        <div className="project_container">
        <Card
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Card"
                src={racoon.img} className="photo"
              />
              <CardBody className="name">
                <CardTitle tag="h5">
                  {racoon.name}
                </CardTitle>
                <CardText>
                  {racoon.age}
                </CardText>
              </CardBody>
              <ListGroup flush >
                <ListGroupItem className="list-group">
                  {racoon.hobbies}
                </ListGroupItem>
                <ListGroupItem className="list-group">
                  {racoon.dislikes}
                </ListGroupItem>
                <ListGroupItem className="button-link">
                <Button color="dark">
              <NavLink to={`/racoonedit/${racoon.id}`} className="nav-link">
                 Edit Raccoon Profile!
              </NavLink>
              </Button>
              </ListGroupItem>
              </ListGroup>
        </Card>
      </div>
      </>
    )
}


export default RacoonShow