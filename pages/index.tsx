import BoxPregunta from "../Components/BoxPregunta";
import CodeComponent from "../Components/CodeComponent"
import Container from "../Components/Container"

const Index = () => {
    return (
        <div>
            <Container titulo="Home">
                <div>
                    <BoxPregunta/>
                    <CodeComponent nameUser="Harold Maussa" post="Este es un post" img="" user="@hmaussa" />
                    <CodeComponent nameUser="Harold Maussa" post="Este es un post" img="" user="@hmaussa" />
                    <CodeComponent nameUser="Harold Maussa" post="Este es un post" img="" user="@hmaussa" />
                </div>
            </Container>
        </div>
    )
}

export default Index;