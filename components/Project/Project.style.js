import styled from "styled-components";
import Image from "next/image";
import config from "../../config";

const ProjectWrapper = styled.ul`
  width: 100%;
`;

const ProjectDetailsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  text-align: left;
  place-items: start;
  padding: 25px 0;

  h3 {
    margin-bottom: 20px;
  }

  p {
    font-family: "Red Hat Mono", monospace;
    font-size: var(--fz-md);
    line-height: 1.7;
  }
  ul {
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px 0;
    width: 90%;
    color: var(--light-slate);
    display: flex;
    flex-wrap: wrap;
    z-index: 2;
    list-style: none;

    li {
      margin: 0px 20px 5px 0px;
      color: var(--light-slate);
      font-family: "Red Hat Mono", monospace;
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
  }

  @media screen and (min-width: ${config.sizes.laptopL}) {
    width: 50%;
    padding: 0 0 0 4em;
    text-align: right;
    place-items: end;
    ul {
      align-items: flex-end;
      justify-content: flex-end;
      padding: 25px;
      padding-right: 0;
      li {
        margin: 0px 0 5px 20px;
      }
    }
  }
`;

const ProjectLinks = styled.div`
  width: 6%;
  font-size: var(--fz-xxl);
  color: var(--light-slate);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${config.sizes.laptopL}) {
    width: 11%;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 25px;
  flex-direction: column;
  @media screen and (min-width: ${config.sizes.laptopL}) {
    flex-direction: row;
  }
`;

const ProjectContainer = styled.li`
  margin-bottom: 20px;

  @media screen and (min-width: ${config.sizes.laptopL}) {
    &:nth-child(2n + 1) {
      ${ProjectContent} {
        flex-direction: ${(props) => {
          return props.isReverse ? "" : "row-reverse";
        }};
      }

      ${ProjectDetailsWrapper} {
        place-items: start;
        text-align: left;
        padding: ${(props) => (props.isReverse ? "0 0 0 4em" : "0 4em 0 0")};
        ul {
          justify-content: flex-start;
          padding: 25px;
          padding-left: 0;
          li {
            margin: 0px 20px 5px 0px;
          }
        }
      }
    }
  }
`;

const ProjectImageWrapper = styled.a`
  position: block;
  height: auto;
  width: 100%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  @media screen and (min-width: ${config.sizes.laptopL}) {
    width: 50%;
  }
  background-color: var(--dark-slate);
  border-radius: var(--border-radius);
  vertical-align: baseline;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    border-radius: var(--border-radius);
    z-index: 3;
    transition: var(--transition);
    background-color: var(--blue);
    mix-blend-mode: multiply;
  }

  :hover {
    background: transparent;
    outline: 0px;
    ::before {
      background: transparent;
      filter: none;
    }
  }
`;

const ProjectImage = styled(Image)`
  border-radius: var(--border-radius);
`;

const ProjectDescriptionHighlighter = styled.span`
  color: #fc5851;
`;

export {
  ProjectWrapper,
  ProjectContainer,
  ProjectContent,
  ProjectImage,
  ProjectImageWrapper,
  ProjectDetailsWrapper,
  ProjectLinks,
  ProjectDescriptionHighlighter,
};
