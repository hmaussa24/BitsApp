interface Prosp {
    nameUser: string;
    user: string;
    post: string;
    img: string

}

const CodeComponent = (props: Prosp) => {
    return (
        <div className="post-container">
            <div className="info-user">
                <div className="img-user">
                    <img src={props.img} alt="image-user" />
                </div>
                <div className="info-user-text">

                    <div className="name-user">
                        {props.nameUser}
                    </div>
                    <div className="user">
                        {props.user}
                    </div>
                </div>
            </div>
            <div className="post-text">
               {props.post}
            </div>
            <div className="code-img">
                <img src="" />
            </div>
            <div className="botones-post">
              <div className="botones-adicionales">
                <span className="boton-option">Like</span>
                <span className="boton-option">Reconpensar</span>
              </div>
              <span className="responder-text">Responder</span>
            </div>
        </div>
    )
}

export default CodeComponent;