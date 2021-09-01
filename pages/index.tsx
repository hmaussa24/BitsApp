import BoxPregunta from "../Components/BoxPregunta";
import CodeComponent from "../Components/CodeComponent"
import Container from "../Components/Container"

const Index = () => {
    const post = "Que tal desarrolladores como se encuentran el dia de hoy espero que bien, quisiera que me ayudaran con es que no he podido solucionar este problema que se me esta presentando he intentado solucionarlo pero enrealidad no he podido."
    return (
        <div>
            <Container titulo="Home">
                <div>
                    <BoxPregunta/>
                    <CodeComponent nameUser="Harold Maussa" post={post} img="https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=identicon&f=y&s=128" user="@hmaussa" />      
                    <CodeComponent nameUser="Luis mateo" post={post} img="https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=identicon&f=y&s=128" user="@lmateo" />      
                    <CodeComponent nameUser="Yaireth Dayana" post={post} img="https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=identicon&f=y&s=128" user="@dayanita" />      
                    <CodeComponent nameUser="Luisa Antonia Maussa" post={post} img="https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=identicon&f=y&s=128" user="@Lluisa" />      
                </div>
            </Container>
        </div>
    )
}

export default Index;