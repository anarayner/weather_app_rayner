import React from 'react'
import {Container, ContainerGridTheme} from "../../shared/ui/Container/Container";

const MainPage = () => {
    return (
        <Container
            grid={ContainerGridTheme.R2C2}
            top_left={'welcome'}
            top_right={'w'}
            bottom_left={'d'}
            bottom_right={'o'}
        />
    )
}

export default MainPage
