import {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const RacoonNew = ({ createRacoon }) => {
    const [newRacoon, setNewRacoon] = useState({
        name: "",
        age: "",
        hobbies: "",
        img: "",
        dislikes: ""
    })

    const handleChange = (e) => {
        setNewRacoon({ ...newRacoon, [e.target.name]: e.target.value })
}    
    const handleSubmit = () => {
        createRacoon(newRacoon)
    }

    return (
        <>
        <div><h1>Create Your Profile</h1></div>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" placeholder="Enter Name" onChange={handleChange} value={newRacoon.name}/>
                    <Label for="age">Age</Label>
                    <Input type="text" name="age" placeholder="How Old You Be?" onChange={handleChange} value={newRacoon.age} />
                    <Label for="hobbies">Hobbies</Label>
                    <Input type="text" name="hobbies" placeholder="Enter Hobbies" onChange={handleChange} value={newRacoon.hobbies}/>
                    <Label for="dislikes">Dislikes</Label>
                    <Input type="text" name="dislikes" placeholder="Enter Dislikes" onChange={handleChange} value={newRacoon.dislikes}/>
                    <Label for="img">Share your face</Label>
                    <Input type="text" name="img" placeholder="Input URL" onChange={handleChange} value={newRacoon.img}/>
                </FormGroup>
                <div>
                    <NavLink to = "/racoonindex">
                        <Button color="primary"  onClick{handleSubmit} name="submit">
                                Click Me
                        </Button>
                    </NavLink>
                </div>
            </Form>
        </>
    )
}


export default RacoonNew