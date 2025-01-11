import React from 'react';

export default function About() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4 fw-bold text-warning">About Omer Lek VOD Website</h1>
                <p className="text-secondary fs-5">Discover more about the developer behind this amazing platform</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-4">
                            <h2 className="text-center text-warning mb-4">Omer Lek</h2>
                            <p className="fs-5 text-muted">
                                Omer Lek is a passionate developer with a deep interest in creating
                                high-quality software. He is skilled in various programming languages
                                and has a keen eye for detail when it comes to building intuitive and
                                user-friendly applications.
                            </p>
                            <p className="fs-5 text-muted">
                                With a strong background in computer science and a love for problem-solving,
                                Omer enjoys working on challenging projects and constantly learning new
                                technologies to improve his craft.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
