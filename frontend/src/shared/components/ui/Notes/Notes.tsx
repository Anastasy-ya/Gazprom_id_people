import {
  Image,
} from "antd";
import styled from "styled-components";
import notes from '../../../assets/notes.svg';

const Notes = styled(Image)`
  max-width: 532px;
  min-width: 360px;
`;

const NotesImage = () => (
  <Notes
    src={notes}
    preview={false}
    alt='Заметки'
      // style={{ cursor: 'pointer' }}
  />
);

export default NotesImage;