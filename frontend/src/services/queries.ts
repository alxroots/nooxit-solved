import { gql } from '@apollo/client';

export const GET_BOXES = gql`
  query getBoxes {
    boxes {
      id
      x
      y
      width
      height
      color
    }
  }
`;

export const CREATE_BOX = gql`
  mutation CreateBox($x: Float!, $y: Float!, $width: Float!, $height: Float!, $color: String!) {
    createBox(x: $x, y: $y, width: $width, height: $height, color: $color) {
      id
      x
      y
      width
      height
      color
    }
  }
`;

export const DELETE_BOX = gql`
  mutation deleteBox($id: Int!) {
    deleteBox(id: $id)
  }
`;

export const CLEAR_BOXES = gql`
  mutation ClearBoxes {
    clearBoxes
  }
`;
