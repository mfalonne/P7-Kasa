import '../styles/Tags.css';

function Tags(props) {
    const name = props.name;
    const className = props.className;
    return(
        <div className={'tag container ' + className}>
            <p className='tag name'>{name}</p>
        </div>
    )
}

export default Tags;