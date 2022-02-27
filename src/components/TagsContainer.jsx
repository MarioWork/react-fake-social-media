import { useState, useEffect } from "react";
import { StyledTagsContainer } from "./styles/TagsContainer.styled";
import { getTags } from "../services/Tag-Service";

const TagsContainer = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tagAbortController = new AbortController();

    getTags(tagAbortController)
      .then((data) => setTags((prevData) => (prevData = data)))
      .catch((err) => {});

    return () => {
      tagAbortController.abort();
    };
  }, []);

  return (
    <StyledTagsContainer>
      {tags.length > 0 && tags.map((tag) => <p>{tag}</p>)}
    </StyledTagsContainer>
  );
};

export default TagsContainer;
