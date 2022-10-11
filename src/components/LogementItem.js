import '../styles/LogementItem.css'

function LogementItem({ cover, title }) {
    return (
        <li className="logement-item">
            <img className="logement-item-cover" src={cover} alt={`${title} cover`} />
            <p>{title}</p>
        </li>
    )
}

export default LogementItem