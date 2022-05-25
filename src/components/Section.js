import "./section.css";
import Button from './Button';

function Section({ title, para, car, url }) {
    console.log(url);
    return (
        <div className={ "section " + car }>
            <img src={url} alt={title}></img>
            <h1>{title}</h1>
            <p>{para}</p>
            <Button />
        </div>
    );
}

export default Section;