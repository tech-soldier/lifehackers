/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";

const Hero = () => {
    return (
        <section className="hero is-default is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                Teach, Learn, Collaborate.
                            </h1>
                            <h2 className="subtitle is-5 is-muted">Become a LifeHacker and influence someone's life by teaching things you are good at. </h2>
                            <p>
                                <a className="button cta rounded primary-btn raised">
                                    Get Started
                                </a>
                            </p>
                        </div>
                        <div className="column is-5 is-offset-1">
                            <figure className="image is-4by3">
                                <img src={process.env.PUBLIC_URL + '/worker.svg'} alt="Description" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero