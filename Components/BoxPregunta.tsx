const BoxPregunta = () => {
    return (
        <div className="pregunta-container">
            <span className="pregunta-titulo">Hacer pregunta</span>
            <div className="panel-post">
                <textarea className="post-input" ></textarea>
            </div>
            <div className="code-img">

            </div>
            <div className="botones-pregunta">
                <div className="panel-boton">
                    <button className="boton-p">{"</>Code"}</button>
                    <button className="boton-p">Publicar</button>
                </div>

            </div>
        </div>
    )
}

export default BoxPregunta;