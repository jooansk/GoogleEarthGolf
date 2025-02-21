# echo-client.py

import socket
from time import sleep
import asyncio
from websockets.server import serve
from asyncio import TaskGroup
import struct
from collections import namedtuple
import json
import pprint
import re


gSendWsData=False
gSendWebsocketData=False
async def handler(websocket):
    global gSendWsData
    global gWsData
    global gSendWebsocketData
    global gWebsocketData
    while True:
        if not gSendWebsocketData:
            try:
                async with asyncio.timeout(0.1):
                    gWsData = await websocket.recv()
                    gSendWsData = True
            except TimeoutError:
                pass
        else:
            gSendWebsocketData = False
            await websocket.send(gWebsocketData)
            print(gSendWebsocketData)

async def wsServer():
    print("Running ws server")
    async with serve(handler, "", 8989):
        await asyncio.get_running_loop().create_future()  # run forever
        
async def handle_client(client):
    global gSendWsData
    global gWsData
    global gSendWebsocketData
    global gWebsocketData
    loop = asyncio.get_event_loop()
    request = None
    while request != 'quit':
        if not gSendWsData:
            try:
                async with asyncio.timeout(0.1):
                    request = (await loop.sock_recv(client,2048)).decode('utf8')
                    if request == '':
                        break
                    gSendWebsocketData = True
                    gWebsocketData = request
            except TimeoutError:
                    pass
        else:
            gSendWsData = False
            await loop.sock_sendall(client, gWsData.encode('utf8'))
            
    client.close()

async def run_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('localhost', 921))
    server.listen(8)
    server.setblocking(False)

    loop = asyncio.get_event_loop()

    while True:
        client, _ = await loop.sock_accept(server)
        loop.create_task(handle_client(client))




class TerminateTaskGroup(Exception):
    """Exception raised to terminate a task group."""

async def force_terminate_task_group():
    """Used to force termination of a task group."""
    raise TerminateTaskGroup()


async def main():
    async with TaskGroup() as group:
        await asyncio.gather(run_server(),wsServer())
        # add an exception-raising task to force the group to terminate


asyncio.run(main())


