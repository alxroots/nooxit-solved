import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from database_test import Base

TEST_DATABASE_URL = "sqlite:///:memory:"


@pytest.fixture(scope="session")
def test_db():
    engine = create_engine(TEST_DATABASE_URL, connect_args={"check_same_thread": False})

    Base.metadata.create_all(bind=engine)

    TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

    try:
        yield TestingSessionLocal
    finally:
        Base.metadata.drop_all(bind=engine)


@pytest.fixture
def db_session(test_db):
    db = test_db()
    try:
        yield db
    finally:
        db.close()
