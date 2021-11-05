import { ActivyTable } from "../../componentes/Button/ActivyTable";
import { Header } from "../../componentes/Button/Header";
import { Summary } from "../../componentes/Button/Summary";
import { Container } from "./styles";


export function Dashboard(){
    return (
        <>  
            <Header />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
        </>
    )
}