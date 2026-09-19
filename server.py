#!/usr/bin/env python3
"""
Capy-Cool Studio Local Server
Serves the web app and image assets locally with CORS and correct MIME types.
"""

import http.server
import socketserver
import os
import sys

PORT = 8000

class CapyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS so canvas getImageData never gets tainted
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def guess_type(self, path):
        if path.endswith(".js"):
            return "application/javascript"
        if path.endswith(".css"):
            return "text/css"
        if path.endswith(".jpeg") or path.endswith(".jpg"):
            return "image/jpeg"
        if path.endswith(".png"):
            return "image/png"
        return super().guess_type(path)

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), CapyHTTPRequestHandler) as httpd:
                print(f"=====================================================")
                print(f"🦫 Capy-Cool Customizer Studio is LIVE!")
                print(f"👉 Open in your browser: http://localhost:{port}")
                print(f"=====================================================")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError:
            port += 1

if __name__ == "__main__":
    main()
