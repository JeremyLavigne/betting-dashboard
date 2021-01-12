import React from 'react';

import '../style/Home.css';

const Home: React.FC = (): JSX.Element => {
    return (
        <div id="home_page">
            <h1>Home</h1>
            <div className="home_page_text">
                <p>
                    If you landed here, it probably means you clone the repo on Github, so, let´s say you deserve a
                    little explanation.
                </p>
                <p>
                    I like to think that it is possible to bet on football using a magic formula, based on statistics
                    and maths. I searched this formula during a long time, for leasure more than for money.
                </p>
                <p>
                    This webpage was made for personnal use, the concept is to open it every morning, see who is playing
                    and where I should bet. Everything behind has been thought, prepared, considered, tested, etc. Only
                    thing to do is follow the app and bet.
                </p>
                <p>
                    The other purpose is to code and apply coding skills, this app is made with React, Typescript,
                    Webpack.
                </p>
                <p>It is version 1.0.0, please do not expect too much for now :-)</p>
            </div>
        </div>
    );
};

export default Home;
