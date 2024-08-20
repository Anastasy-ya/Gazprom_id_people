import {
  Image,
} from "antd";
import styled from "styled-components";
import notes from "../../shared/assets/notes.svg";

const Notes = styled(Image)`
  max-width: 532px;
  min-width: 360px;
`;

const NotesImage = () => (
  <Notes
    src={notes}
    preview={false}
    alt="Заметки"
  />
);

export default NotesImage;