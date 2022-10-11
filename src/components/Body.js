import { LogementList } from '../datas/LogementList'
import '../styles/Body.css'
import LogementItem from './LogementItem'

function Body() {
    return (
        <div className="Container">
            <ul className='logement-list'>
                {LogementList.map(({ id, cover, title }) => (
                    <LogementItem
                        key={id}
                        cover={cover}
                        title={title}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Body