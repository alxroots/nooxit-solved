import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { BoxColumns } from 'types/global-types';

import { GlobalContext } from '../../context/GlobalContext';
import { GET_BOXES, CREATE_BOX, DELETE_BOX } from '../../services/queries';

export function BoxCanvas() {
  const { boxes, setBoxes, selectedAction, color, setCounter } =
    useContext(GlobalContext);
  const [drawing, setDrawing] = useState(false);
  const [boxBeingDrawn, setBoxBeingDrawn] = useState<null | BoxColumns>(null);

  const { loading, error, data } = useQuery(GET_BOXES);
  const [createBox] = useMutation(CREATE_BOX);
  const [deleteBox] = useMutation(DELETE_BOX);

  useEffect(() => {
    if (data && data.boxes) {
      setBoxes(data.boxes);
      setCounter(data.boxes.length);
    }
  }, [data, setBoxes, setCounter]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :p</p>;

  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    if (selectedAction === 'add') {
      const svg = event.currentTarget;
      const svgPosition = svg.getBoundingClientRect();

      const x = event.clientX - svgPosition.left;
      const y = event.clientY - svgPosition.top;

      setDrawing(true);
      const newBox: BoxColumns = {
        id: 0,
        x: x,
        y: y,
        width: 0,
        height: 0,
        color: color,
      };
      setBoxBeingDrawn(newBox);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (drawing && boxBeingDrawn) {
      const svg = event.currentTarget;
      const svgPosition = svg.getBoundingClientRect();

      const mouseX = event.clientX - svgPosition.left;
      const mouseY = event.clientY - svgPosition.top;

      const width = mouseX - boxBeingDrawn.x;
      const height = mouseY - boxBeingDrawn.y;

      if (Math.abs(width) > 2 && Math.abs(height) > 2) {
        setBoxBeingDrawn({ ...boxBeingDrawn, width, height });
      }
    }
  };

  const handleMouseUp = async (event: React.MouseEvent<SVGSVGElement>) => {
    if (drawing) {
      setDrawing(false);
      if (boxBeingDrawn) {
        try {
          const response = await createBox({
            variables: { ...boxBeingDrawn, id: undefined },
          });
          const newBox = response.data.createBox;
          setBoxes((prevBoxes: BoxColumns[]) => [...prevBoxes, newBox]);

          setCounter((prevCounter) => prevCounter + 1);
        } catch (error) {
          console.error('Error while trying to create new box:', error);
        }
      }
      setBoxBeingDrawn(null);
    }
  };

  const handleBoxClick = async (id: number) => {
    if (selectedAction === 'remove') {
      try {
        await deleteBox({
          variables: { id },
        });

        setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));

        setCounter((prevCounter) => prevCounter - 1);
      } catch (error) {
        console.error('Error while trying to delete:', error);
      }
    }
  };

  return (
    <div className="box-canvas">
      <svg
        className="canvas"
        width="100%"
        height="100%"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {boxes.map((box: BoxColumns) => (
          <rect
            key={box.id}
            x={box.x}
            y={box.y}
            width={box.width}
            height={box.height}
            fill={box.color}
            onClick={() => handleBoxClick(box.id)}
          />
        ))}
        {boxBeingDrawn && (
          <rect
            x={boxBeingDrawn.x}
            y={boxBeingDrawn.y}
            width={boxBeingDrawn.width}
            height={boxBeingDrawn.height}
            fill={boxBeingDrawn.color}
          />
        )}
      </svg>
    </div>
  );
}
