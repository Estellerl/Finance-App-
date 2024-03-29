## everything we need to connect our database to our FASTAPI 

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker 
from sqlalchemy.ext.declarative import declarative_base


URL_DATABASE = 'sqlite:///./finance.db'

# engine = create_engine(URL_DATABASE, connect_args={"check_same_threads": False})

# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base= declarative_base()

URL_DATABASE = 'sqlite:///./finance.db'
engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()