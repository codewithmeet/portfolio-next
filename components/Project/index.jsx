import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  ProjectContainer,
  ProjectContent,
  ProjectDetailsWrapper,
  ProjectImage,
  ProjectImageWrapper,
  ProjectLinks,
  ProjectWrapper,
} from "./Project.style";
import image1 from "../../public/images/project.png";

const dummy = {
  id: "1",
  title: "Project Title",
  description: "Project Description",
  image: image1,
};

const Project = () => {
  return (
    <ProjectWrapper>
      <ProjectContainer>
        <ProjectContent>
          <ProjectImageWrapper href="#" target="_blank">
            <ProjectImage
              className="project-image"
              src={dummy.image}
              layout="responsive"
              priority
            />
          </ProjectImageWrapper>
          <ProjectDetailsWrapper>
            <h3>React Moviely</h3>

            <p>
              A movie search application built with React.js and the movie
              database API. It can also gives you the details of the movie and
              the recommendations of the particular gerne.
            </p>

            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Spotify API</li>
              <li>Styled Components</li>
            </ul>

            <ProjectLinks>
              <a href="#" target="_blank">
                <FiGithub />
              </a>
              <a href="#" target="_blank">
                <FiExternalLink />
              </a>
            </ProjectLinks>
          </ProjectDetailsWrapper>
        </ProjectContent>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectContent>
          <ProjectImageWrapper href="#" target="_blank">
            <ProjectImage
              className="project-image"
              src={dummy.image}
              layout="responsive"
              priority
            />
          </ProjectImageWrapper>
          <ProjectDetailsWrapper>
            <h3>React Moviely</h3>

            <p>
              A movie search application built with React.js and the movie
              database API. It can also gives you the details of the movie and
              the recommendations of the particular gerne.
            </p>

            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Spotify API</li>
              <li>Styled Components</li>
            </ul>

            <ProjectLinks>
              <a>
                <FiGithub />
              </a>
              <a>
                <FiExternalLink />
              </a>
            </ProjectLinks>
          </ProjectDetailsWrapper>
        </ProjectContent>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

export default Project;

{
  /* <ProjectImageWrapper> */
}
{
  /* <ProjectImage
          className="project-image"
          src={dummy.image}
          layout="fill"
          objectFit="fill"
          priority
        /> */
}
{
  /* </ProjectImageWrapper> */
}
// <DetailsWrapper>Details</DetailsWrapper>;
