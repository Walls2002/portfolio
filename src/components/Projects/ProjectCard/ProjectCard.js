import React, { useState, useEffect } from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
  ImageModal,
  ModalImage,
  ModalClose,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import { colors } from "@mui/material";
import { blue } from "@mui/material/colors";
function ProjectCard() {
  const [zoomSrc, setZoomSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setZoomSrc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" animateOnce>
          <div>
            <Card>
              <CardLeft>
                <img
                  height={"100%"}
                  src={list.img}
                  alt={list.name}
                  style={{ cursor: "pointer" }}
                  onClick={() => setZoomSrc(list.img)}
                />
              </CardLeft>

              <CardRight>
                <h4>{list.title}</h4>
                <p>{list.description}</p>
                <TechCardContainer>
                  {list.tech_stack.map((tech, index) => (
                    <TechCard style={{ color: blue[500] }} key={index}>
                      {tech}
                    </TechCard>
                  ))}
                </TechCardContainer>
                <BtnGroup>
                  {list.github_url.length > 0 && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={list.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  )}
                  {list.demo_url.length > 0 && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={list.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo ➜
                    </a>
                  )}
                </BtnGroup>
              </CardRight>
            </Card>
          </div>
        </ScrollAnimation>
      ))}

      {zoomSrc && (
        <ImageModal onClick={() => setZoomSrc(null)}>
          <ModalImage
            src={zoomSrc}
            alt="zoomed"
            onClick={(e) => e.stopPropagation()}
          />
          <ModalClose onClick={() => setZoomSrc(null)} aria-label="Close zoom">
            ×
          </ModalClose>
        </ImageModal>
      )}
    </>
  );
}

export default ProjectCard;
