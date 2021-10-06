/* Components */
import { Nav } from './Nav';

export const Layout: React.FC = props => {
    return (
        <main>
            <section className = 'layout'>
                <div className = 'content-bg'>
                    <div className = 'content'>
                        <Nav />

                        {props.children}

                        <footer className = 'center'>
                            <p>
                                &copy; Slick's Slices {new Date().getFullYear()}
                                .
                            </p>
                        </footer>
                    </div>
                </div>
            </section>
        </main>
    );
};
