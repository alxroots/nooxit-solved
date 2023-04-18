import strawberry
from strawberry.types import Info
from database import get_db
from models import Box


@strawberry.type
class BoxType:
    id: int
    x: float
    y: float
    width: float
    height: float
    color: str


@strawberry.type
class Query:
    @strawberry.field
    def boxes(self, info: Info) -> list[BoxType]:
        with get_db() as db:
            return db.query(Box).all()

    @strawberry.field
    def box(self, info: Info, id: int) -> BoxType:
        with get_db() as db:
            box = db.query(Box).filter(Box.id == id).first()
            if not box:
                raise Exception("Box not found")
            return box


@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_box(
        self, info: Info, x: float, y: float, width: float, height: float, color: str
    ) -> BoxType:
        with get_db() as db:
            box = Box(x=x, y=y, width=width, height=height, color=color)
            db.add(box)
            db.flush()
            db.commit()
            db.refresh(box)
            return box

    @strawberry.mutation
    def update_box(
        self,
        info: Info,
        id: int,
        x: float = None,
        y: float = None,
        width: float = None,
        height: float = None,
        color: str = None,
    ) -> BoxType:
        with get_db() as db:
            box = db.query(Box).filter(Box.id == id).first()
            if not box:
                raise Exception("Box not found")

            if x is not None:
                box.x = x
            if y is not None:
                box.y = y
            if width is not None:
                box.width = width
            if height is not None:
                box.height = height
            if color is not None:
                box.color = color

            db.commit()
            db.refresh(box)
            return box

    @strawberry.mutation
    def delete_box(self, info: Info, id: int) -> str:
        with get_db() as db:
            box = db.query(Box).filter(Box.id == id).first()
            if not box:
                raise Exception("Box not found")

            db.delete(box)
            db.commit()
            return f"Box {id} deleted successfully"

    @strawberry.mutation
    def clear_boxes(self, info: Info) -> str:
        with get_db() as db:
            db.query(Box).delete()
            db.commit()
            return "All boxes cleared successfully"


schema = strawberry.Schema(query=Query, mutation=Mutation)
