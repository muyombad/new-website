import smtplib
from urllib.parse import parse_qs
from http.server import BaseHTTPRequestHandler, HTTPServer

class MyRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        params = parse_qs(post_data.decode('utf-8'))

        my_email = "arrowcentretyres@gmail.com"
        password = "xxqk iqpi zlcs ikbn"
        to = "muyombadavid12@gmail.com"

        connection = smtplib.SMTP("smtp.gmail.com", 587)
        connection.starttls()
        connection.login(user=my_email, password=password)

        subject = "NEW CUSTOMER"
        message = params.get('message', [''])[0]
        email = params.get('email', [''])[0]
        name = params.get('name', [''])[0]
        phone = params.get('phone', [''])[0]
        service = params.get('service', [''])[0]
        date = params.get('date', [''])[0]
        time = params.get('time', [''])[0]

        email_body = f"Subject: {subject}\n\n Email Adress: {email}\n Full Names: {name}\n Phone Number: {phone}\n Service: {service}\n Schedule Date: {date}\n Schedule Time: {time}\n\n {message} "

        connection.sendmail(
            from_addr=my_email,
            to_addrs=to,
            msg=email_body
        )

        connection.close()

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'Thank you for submitting the form!')
        

def run():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, MyRequestHandler)
    print('Server is running on port 8000...')
    
    httpd.serve_forever()

if __name__ == '__main__':
    run()
