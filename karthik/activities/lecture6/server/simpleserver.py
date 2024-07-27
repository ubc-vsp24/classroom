#!/usr/bin/python
# Simple HTTP server to test node.js applications with AJAX
# NOTE: This must be invoked on the /client directory


from http.server import HTTPServer, BaseHTTPRequestHandler
import random
from time import sleep
from os import curdir, sep

PORT = 8080	# Port to connect to

# Begin configuration - change these parameters for the server to have interesting behaviors

delay = True		# Should there be a delay ?
minDelay = 0 		# if so, the minimum delay in seconds
maxDelay = 3 		# if so, the maximum delay in seconds
introduceError = False 	# Should we have the server returning an error
errorProb = 0.50	# If so, with what probability should we introduce errors

# End of configuration - change the code below only if you know what you're doing

class MyRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        "Process a GET Request"
        if self.path.startswith('/hello'):
            # If it's an AJAX request - send a response
            print("Received hello request");
            success = True
            if introduceError: # Introduce an error with a probability if introduceError is True
                success = (random.random() >= errorProb)
            
            if success:
                self.send_response(200)
            else:
                errorCode = 400 + random.randint(0, 25)
                self.send_error(errorCode)
            
            self.send_header('Content-type','text/html')
            self.end_headers()

            # if delay parameter is set, Sleep for a random number of seconds
            if delay: sleep(random.randint(minDelay, maxDelay))
			
            if success:
                # Extract the message number and send it back
                count = self.path.split('-')[1]
                responseStr = "World " + str(count)
                self.wfile.write( responseStr.encode("utf-8") )   # send response world after casting as a stream
                print("Sent response " + responseStr)

            return
        else: 
            # It's a request for a file - return the file
            print("Requesting file " + self.path)
            try:
                buffer = open(curdir + sep + self.path, 'rb')
            except IOError:
                self.send_error(404, "not found")        
                print("Error sending file")
            else:
                # The file was found, so read it and send it
                self.send_response(200)
                # self.send_header("Content-type", fileType)
                self.end_headers();
                self.wfile.write(buffer.read())
                print("Done sending file")
            return


server = HTTPServer(('0.0.0.0', PORT), MyRequestHandler)
print( "Starting server on port" + str(PORT) )
server.serve_forever()
