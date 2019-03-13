import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";

const CardContainer = styled.div`
  position: relative;
  height: 350px;
  width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const MainCard = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 300px;
  width: 100%;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.19);
  padding: 10px;
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

const CardImg = styled.div`
  height: 100%;
  width: 100%;
  background: #eaeaea;
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const UserInfo = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

const EditItemBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;

const EditItemField = styled.input`
  box-sizing: border-box;
  padding: 0 15px;
  width: 75%;
  height: 35px;
  background: white;
  border: 1px #eaeaea solid;
  border-radius: 5px;
  outline: none;
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

function Card({
  id,
  imageId,
  user,
  likes,
  name,
  comments,
  photo,
  likeImage,
  updateImage,
  deleteImage,
  canDelete,
  setModal
}) {
  console.log(comments)
  const [deleteItem, setDeleteItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [field, setField] = useState("");
  const [likeSection, setLikeSection] = useState(false);

  const userHasLiked = likes.includes(id);

  return (
    <CardContainer>
      <MainCard
        onMouseEnter={() => setLikeSection(true)}
        onMouseLeave={() => setLikeSection(false)}
      >
        <CardImg backgroundImg={photo} onClick={() => setModal({ imageId, name, photo, likes, likeImage, user, id, comments })} />
        <LikeSection open={likeSection}>
          <small>{likes.length}</small>
          <CloseButton>
            <i
              onClick={() => likeImage(id, imageId, likes)}
              style={{ fontSize: 18, color: userHasLiked ? '#ff0080' : '#000' }}
              className="material-icons"
            >
              thumb_up_alt
            </i>
          </CloseButton>
        </LikeSection>
      </MainCard>
      <UserInfo>
        {!editItem && (
          <div>
            {name[0].toUpperCase()}
            {name.slice(1)} by&nbsp;
            <Link
              to={`/user/${id}`}
              style={{ textDecoration: "none", color: "#ff0080" }}
            >
              {user}
            </Link>
          </div>
        )}

        {canDelete && !editItem && !deleteItem && (
          <div>
            <DeleteButton>
              <i
                style={{ fontSize: 18, color: "#000" }}
                onClick={() => setEditItem(!editItem)}
                className="material-icons"
              >
                edit
              </i>
            </DeleteButton>
            <DeleteButton>
              <i
                onClick={() => setDeleteItem(true)}
                style={{ fontSize: 18, color: "#000" }}
                className="material-icons"
              >
                delete
              </i>
            </DeleteButton>
          </div>
        )}

        {editItem && (
          <EditItemBox justify="space-between">
            <EditItemField
              value={field}
              placeholder="New name"
              onChange={e => setField(e.target.value)}
            />
            <Button
              label="update"
              clickFunction={() => {
                updateImage(imageId, field);
                setEditItem(false);
                setField("");
              }}
            />
            <CloseButton>
              <i
                className="material-icons"
                onClick={() => setEditItem(false)}
                style={{ cursor: "pointer", fontSize: 18 }}
              >
                close
              </i>
            </CloseButton>
          </EditItemBox>
        )}

        {deleteItem && (
          <EditItemBox justify="flex-end">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                label="delete?"
                clickFunction={() => {
                  deleteImage(imageId);
                  setDeleteItem(false);
                }}
              />
              <CloseButton>
                <i
                  className="material-icons"
                  onClick={() => setDeleteItem(false)}
                  style={{ cursor: "pointer", fontSize: 18 }}
                >
                  close
                </i>
              </CloseButton>
            </div>
          </EditItemBox>
        )}
      </UserInfo>
    </CardContainer>
  );
}

export default Card;
