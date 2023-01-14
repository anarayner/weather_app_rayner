import React, {useState} from 'react'
import {Container} from "../../../shared/ui/Container/Container";
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Button} from "../../../shared/ui/Button";
import {Progress} from "../../../shared/ui/Progress/Progress";
import {CurrentDayCard} from "../../../features/CurrentDayCard/CurrentDayCard";
import {WeekDayDescCard} from "../../../features/WeekDayDescCard/WeekDayDescCard";

const AboutPage = () => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div>
            <Container>
                ABOUT PAGE
                <Button onClick={()=> setIsOpened(true)}>Click</Button>
                <Modal isOpen={isOpened} onClose={()=> setIsOpened(false)}>
                    <WeekDayDescCard/>
                </Modal>

                <Progress value={0.5}/>

            </Container>
        </div>
    )
}

export default AboutPage
