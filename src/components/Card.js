import Section from './Section';
import Contents from '../contents.json';
import "./card.css";

function Card() {
    console.log(Contents);

    return (
        <main className="card">
            {
                Contents.map(({ title, paragraph, car, pic }, index) => (
                    <Section key={title} title={title} para={paragraph} car={car} url={pic} />
                ))
            }
        </main>
    );
}

export default Card;