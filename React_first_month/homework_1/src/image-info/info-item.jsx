import './info.css'

export function InfoItem(props){
    return (
        <div className='info-item'>
            <img src={props.src} alt="onex" />
            <p>{props.text}</p>
        </div>
    )
}