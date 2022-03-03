import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        document.title = "Rik den Breejen | Projects";
    }, []);

    return (
        <div>Projects</div>
    );
};

export default Projects;