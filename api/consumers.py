from django.http import HttpResponse
from channels.handler import AsgiHandler
from channels.generic import BaseConsumer
from channels.generic.websockets import WebsocketConsumer


class TotoConsumer(BaseConsumer):
    method_mapping = {
        "websocket.receive": "ws_message",
    }

    def http_consumer(message):
        # Make standard HTTP response - access ASGI path attribute directly
        response = HttpResponse("Hello world! You asked for %s" % message.content['path'])
        # Encode that response into message format (ASGI)
        for chunk in AsgiHandler.encode_response(response):
            message.reply_channel.send(chunk)


    def ws_message(self, message, **kwargs):
        # ASGI WebSocket packet-received and send-packet message types
        # both have a "text" key for their textual data.
        print(message.content)
        message.reply_channel.send({
            "text": message.content['text']+"from server",
        })

class MyConsumer(WebsocketConsumer):

    # Set to True to automatically port users from HTTP cookies
    # (you don't need channel_session_user, this implies it)
    http_user = True

    # Set to True if you want it, else leave it out
    strict_ordering = False

    def connection_groups(self, **kwargs):
        """
        Called to return the list of groups to automatically add/remove
        this connection to/from.
        """
        return ["test"]

    def connect(self, message, **kwargs):
        """
        Perform things on connection start
        """
        # Accept the connection; this is done by default if you don't override
        # the connect function.
        self.message.reply_channel.send({"accept": True})

    def receive(self, text=None, bytes=None, **kwargs):
        """
        Called when a message is received with either text or bytes
        filled out.
        """
        # Simple echo
        self.send(text=text+' from server', bytes=bytes)

    def disconnect(self, message, **kwargs):
        """
        Perform things on connection close
        """
        pass

