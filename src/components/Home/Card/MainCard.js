import React, { useState } from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";

const MainCardContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 300px;
  width: 100%;
  /* box-shadow: 0 3px 25px rgba(0, 0, 0, 0.19); */
  border-radius: 5px;
  border: 1px #eaeaea solid;
  padding: 15px;
  background: #fff;
  overflow: hidden;
`;

const LikeSection = styled.div`
  z-index: 50;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #fff;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: transform 400ms, opacity 400ms;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: #eaeaea;
`;

const CardImg = styled.div`
  height: 100%;
  width: 100%;
  background: #eaeaea;
  background-image: ${({ backgroundImg }) => `url(${backgroundImg}?h=300)`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

function MainCard({
  photo,
  imageId,
  name,
  likes,
  likeImage,
  user,
  id,
  comments,
  setModal
}) {
  const [likeSection, setLikeSection] = useState(false);
  const userHasLiked = likes.includes(id);

  return (
    <MainCardContainer
      onMouseEnter={() => setLikeSection(true)}
      onMouseLeave={() => setLikeSection(false)}
    >
      <ProgressiveImage src={photo} placeholder="">
        {(src, loading) => {
          return loading ? (
            <Placeholder />
          ) : (
            <CardImg
              backgroundImg={src}
              onClick={() =>
                setModal({
                  id,
                  imageId,
                  name,
                  photo,
                  likes,
                  likeImage,
                  user,
                  comments
                })
              }
            />
          );
        }}
      </ProgressiveImage>
      <LikeSection open={likeSection}>
        <small>{likes.length}</small>
        <CloseButton>
          <i
            onClick={() => likeImage(id, imageId, likes)}
            style={{ fontSize: 18, color: userHasLiked ? "#ff0080" : "#000" }}
            className="material-icons"
          >
            thumb_up_alt
          </i>
        </CloseButton>
      </LikeSection>
    </MainCardContainer>
  );
}

export default MainCard;
