import json
import logging
from fastapi.testclient import TestClient
from main import app
from models import Box

client = TestClient(app)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

handler = logging.FileHandler('test.log')
handler.setLevel(logging.DEBUG)

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

logger.addHandler(handler)


def test_create_box_mutation(db_session):
    mutation = """
    mutation {
      createBox(x: 10, y: 20, width: 30, height: 40, color: "red") {
        id
        x
        y
        width
        height
        color
      }
    }
    """

    response = client.post("/graphql", json={"query": mutation})
    box_data = response.json()["data"]["createBox"]
    created_box = db_session.query(Box).first()
    logger.debug(f'BOX: {created_box}')

    assert created_box is not None
    assert created_box.x == 10.0
    assert created_box.y == 20.0
    assert created_box.width == 30.0
    assert created_box.height == 40.0
    assert created_box.color == "red"
