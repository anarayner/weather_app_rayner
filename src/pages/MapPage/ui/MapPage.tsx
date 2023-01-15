import React, {useState} from 'react'
import {Container} from "../../../shared/ui/Container/Container";
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Button} from "../../../shared/ui/Button";
import {Progress} from "../../../shared/ui/Progress/Progress";
import {CurrentDayCard} from "../../../features/CurrentDayCard/CurrentDayCard";
import {WeekDayDescCard} from "../../../features/WeekDayDescCard/WeekDayDescCard";

const MapPage = () => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div>
            <Container>
                <Button onClick={()=> setIsOpened(true)}>Click</Button>
                <Modal isOpen={isOpened} onClose={()=> setIsOpened(false)}>
                    <WeekDayDescCard/>
                </Modal>
            </Container>
        </div>
    )
}

export default MapPage