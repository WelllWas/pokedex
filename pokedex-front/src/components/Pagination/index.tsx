import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.css";

export function Pagination({ pokesPerPage, totalPokes, paginate, currentPage }: any) {
    const liStyle = `page-item ${styles.paginateButton}`;
    const liStyleActive = `page-item active ${styles.paginateButton}`;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (pageNumbers.length != 1) ? (
        <>
            <footer>
                <div className={styles.navDiv}>
                    <nav>
                        <ul className='pagination'>
                            {pageNumbers.map(number => (
                                <li key={number} className={
                                    number == currentPage ? liStyleActive : liStyle
                                }>
                                    <a onClick={() => paginate(number)} className='page-link'>
                                        {number}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    ) : <></>;
}