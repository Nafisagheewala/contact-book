export default function Conatct(props) {
    return (
        <div className="contact">
            <img src={props.img} alt="Profile-pic" className="contact-image" />
            <h2>{props.name}</h2>
            <div>
            <i className="fa-solid fa-phone"></i> {props.phoneNumber}
            </div>
            <div>
            <i className="fa-solid fa-envelope"></i> {props.email}
            </div>
        </div>
    )
}