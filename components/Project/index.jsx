import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ReadMoreReadLess } from "../ReadMoreReadLess/ReadMoreReadLess";
import {
  ProjectContainer,
  ProjectContent,
  ProjectDetailsWrapper,
  ProjectImage,
  ProjectImageWrapper,
  ProjectLinks,
  ProjectWrapper,
} from "./Project.style";

const Project = ({
  id,
  image,
  title,
  description,
  techs,
  github_url,
  live_url,
}) => {
  return (
    <ProjectWrapper>
      <ProjectContainer isReverse={id % 2 === 0}>
        <ProjectContent>
          <ProjectImageWrapper href={live_url} target="_blank">
            <ProjectImage
              className="project-image"
              src={image}
              layout="responsive"
              priority
            />
          </ProjectImageWrapper>
          <ProjectDetailsWrapper>
            <h3>{title}</h3>
            <ReadMoreReadLess limit={500}>{description}</ReadMoreReadLess>

            {!!techs.length && (
              <ul>
                {techs?.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
            <ProjectLinks>
              {github_url && (
                <a href={github_url} target="_blank" rel="noreferrer">
                  <FiGithub />
                </a>
              )}
              {live_url && (
                <a href={live_url} target="_blank" rel="noreferrer">
                  <FiExternalLink />
                </a>
              )}
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
