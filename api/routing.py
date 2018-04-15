# In routing.py
from channels.routing import route, route_class
from api.consumers import TotoConsumer, MyConsumer


channel_routing = [
    route_class(TotoConsumer),
]
