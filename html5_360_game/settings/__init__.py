from .default import *
from api_360_game.settings import *
try:
    from .custom import *
except ImportError:
    pass

