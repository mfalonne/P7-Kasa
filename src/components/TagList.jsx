import Tag from './Tag';
import '../styles/TagList.css';

function TagList(props) {
    const nameList = props.tags;
    const className = props.className;

    return(
        <div className={'tag-list container ' + className}>
            {nameList.map((name, index) =>
                <Tag name={name} key={index} />
            )}
        </div>
    )
}

export default TagList;