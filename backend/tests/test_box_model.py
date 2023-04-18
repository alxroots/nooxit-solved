from models import Box


def test_create_box(db_session):

    box = Box(x=10.0, y=20.0, width=30.0, height=40.0, color="red")

    db_session.add(box)
    db_session.commit()

    retrieved_box = db_session.get(Box, box.id)

    assert retrieved_box.id == box.id
    assert retrieved_box.x == box.x
    assert retrieved_box.y == box.y
    assert retrieved_box.width == box.width
    assert retrieved_box.height == box.height
    assert retrieved_box.color == box.color
