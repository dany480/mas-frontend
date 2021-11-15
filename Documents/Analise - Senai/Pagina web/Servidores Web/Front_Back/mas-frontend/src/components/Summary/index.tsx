import {GoFile, GoNote, GoGraph} from 'react-icons/go'
import {Container} from './styles';

export function Summary() {
    return(
        <Container>
            <div>
                <header>Unidades Curriculares</header>
                <GoFile size= {40} />
                <strong>25</strong>
            </div>
                
            <div>
                <header>Atividades</header>
                <GoNote size= {40} />
                <strong>80</strong>
            </div>

            <div className= 'highlight-background'>
            <header>Média</header>
                <GoGraph size= {40} />
                <strong>9.17</strong>
            </div>
        </Container>
    )
}