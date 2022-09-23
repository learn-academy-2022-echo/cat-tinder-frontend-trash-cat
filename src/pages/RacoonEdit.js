import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink, useParams, useNavigate } from 'react-router-dom'



const RacoonEdit = ({racoon, updateRacoon}) => { 
    const { id } = useParams()
    let currentRacoon = racoon?.find((racoon) => racoon.id === +id)

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
    // const navigate = useNavigate()
    const handleSubmit = () => {
        updateRacoon(editRacoon, currentRacoon.id)
        // navigate("/racoonindex")
    }


    return (
        <>
        <div><h1>Edit Your Profile</h1></div>
            {/* <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" placeholder="Enter Name" />
                    <Label for="age">Age</Label>
                    <Input type="text" name="age" placeholder="How Old You Be?" />
                    <Label for="hobbies">Hobbies</Label>
                    <Input type="text" name="hobbies" placeholder="Enter Hobbies" />
                    <Label for="dislikes">Dislikes</Label>
                    <Input type="text" name="dislikes" placeholder="Enter Dislikes" />
                    <Label for="img">Share your face</Label>
                    <Input type="text" name="img" placeholder="Input URL" />
                </FormGroup>
                <div>
                    <NavLink to = "/racoonindex">
                        <Button color="primary" onClick={handleSubmit} name="submit">
                                Update Me!
                        </Button>
                    </NavLink>
                </div>
            </Form> */}
            <Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" />
  </FormGroup>
  <FormGroup>
    <Label for="age">Age</Label>
    <Input type="number" name="age" />
  </FormGroup>
  <FormGroup>
    <Label for="enjoys">Enjoys</Label>
    <Input type="text" name="enjoys" />
  </FormGroup>
  <FormGroup>
    <Label for="image">Image URL</Label>
    <Input type="text" name="image" />
  </FormGroup>
</Form>
            </>
    )
}


export default RacoonEdit