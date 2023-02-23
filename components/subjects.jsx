import { SubjectCard } from "./subject-card";
import styles from './subjects.module.css';
export function Subjects({subjects}){
    console.log(subjects)
    return (<ul className={styles.container}>
        {subjects.map(({fields: {title, shortDescription, trumb}, sys: {id}}) => (
            <SubjectCard 
                key={id}
                title={title} 
                id={id} 
                trumb={trumb} 
                shortDescription={shortDescription}
            />
        ))}
    </ul>);
}