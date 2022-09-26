import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'
import './RacoonEdit.css'




const RacoonEdit = ({racoons, updateRacoon }) => { 
  const { id } = useParams()
  let currentRacoon = racoons?.find((racoon) => racoon.id === +id)

  const [editRacoon, setEditRacoon] = useState({
    name: currentRacoon.name,
    age: currentRacoon.age,
    hobbies: currentRacoon.hobbies,
    img: currentRacoon.img,
    dislikes: currentRacoon.dislikes
  })
  const handleChange = (e) => {
    setEditRacoon({...editRacoon, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateRacoon(editRacoon, currentRacoon.id)
    navigate("/racoonindex")
  }
  
    return (
        <>
        <div className="title"><h1>Edit Your Profile</h1></div>
        <div className="form">
        <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" placeholder="Enter Name" onChange={handleChange} value={editRacoon.name} />
                    <Label for="age">Age</Label>
                    <Input type="text" name="age" placeholder="How Old You Be?" onChange={handleChange} value={editRacoon.age}/>
                    <Label for="hobbies">Hobbies</Label>
                    <Input type="text" name="hobbies" placeholder="Enter Hobbies" onChange={handleChange} value={editRacoon.hobbies}/>
                    <Label for="dislikes">Dislikes</Label>
                    <Input type="text" name="dislikes" placeholder="Enter Dislikes" onChange={handleChange} value={editRacoon.dislikes}/>
                    <Label for="img">Share your face</Label>
                    <Input type="text" name="img" placeholder="Input URL" onChange={handleChange} value={editRacoon.img}/>
                </FormGroup>
                    <Button onClick={handleSubmit} name="submit" color="dark" className="bts">
                        Update Your Raccoon! 
                    </Button>
          </Form>
          </div>
            </>
    )
}


export default RacoonEdit