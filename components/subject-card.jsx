import Link from 'next/link';
import Image from 'next/image';
import styles from './subject-card.module.css';

export function SubjectCard({ id, title, trumb, shortDescription }){
    return (<>
        <li key={id} className={styles.container}>
            <Image
                src={'https:'+trumb.fields.file.url} // Route of the image file
                height={444}
                width={444}
                alt="Your Name"
            />
            <h2><Link href={`/subjects/${id}`}>{title}</Link></h2>
            <p>{shortDescription}</p>
        </li>
    </>);
}