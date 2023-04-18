from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Box(Base):
    __tablename__ = "boxes"

    id = Column(Integer, primary_key=True)
    x = Column(Float, nullable=False)
    y = Column(Float, nullable=False)
    width = Column(Float, nullable=False)
    height = Column(Float, nullable=False)
    color = Column(String, nullable=False)

    def __repr__(self):
        return f"<Box(id={self.id}, x={self.x}, y={self.y}, width={self.width}, height={self.height}, color={self.color})>"
