from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.asgi import GraphQL
from schema import schema

app = FastAPI()

graphql_app = GraphQL(schema)


origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def read_root():
    return {"message": "Welcome to your FastAPI application with Strawberry GraphQL"}


app.add_route("/graphql", graphql_app)
app.add_websocket_route("/subscriptions", graphql_app)
