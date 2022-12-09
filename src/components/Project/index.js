
import React from "react";
import Card from "react-bootstrap/Card";

//images are the links in this case, pass is props as per module 
function Project () {

  const projects = [
    {
      id: 0,
        title: "Cars Ecommerce Website",
        image: "/assets/Cars.PNG",
        description: "A proof-of-concept E-commerce website for Cars",
        repo: "https://github.com/AdamGabo/eStoreThatSellsCarStuff",
        website: "https://stormy-wildwood-35895.herokuapp.com/"
    }, 
    {
      id: 1,
      title: "Pods and Parks",
      image: "/assets/Run Buddy.PNG",
      description: "Listen to podcasts while you run in a park",
      repo: "https://github.com/AdamGabo/PlayMeSpotify",
      website: "https://adamgabo.github.io/PlayMeSpotify/"
    },
    {
      id: 2,
      title: "Starship",
      image: "/assets/Starship.PNG",
      description: "Market Dashboard",
      repo: "https://github.com/FOR-TIMI/Starship",
      website: "https://still-cliffs-68409.herokuapp.com/dashboard/app"
    }
    ]; 

  return (
    <div>
    {projects.map((project) => (
    <Card style={{ width: '25%' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + project.image} alt="image"/>
      <Card.Body>
        <Card.Title><p>{project.title}</p></Card.Title>
        <Card.Text>
          <p>{project.description}</p>
          <a href={project.repo} className="card-footer-link" target="_blank" rel="noreferrer"> Github Repo</a>
          <a href={project.website} className="card-footer-link" target="_blank" rel="noreferrer"> Deployed Website Link</a>
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
};

export default Project;