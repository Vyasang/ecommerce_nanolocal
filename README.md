### eCommerce
A simple MEAN stack example of creating a eCommerce web site
This should serv as a demo app in MEAN stack 

### App features
- Allows users to signup with different roles (vendor, employee, user & Admin)
- As a vendor add products for sale
- As a employee monitor the products being added by vendors 
- Employee will be pushed with products being added in real time, without having to refresh the page or any additional manual step
- As a user browse the catalog of products 

### Development notes
- Designed to cleanly separate the Model, View & Controller 
- Uses socket.io for real time communication
- Uses mongoosejs for backend Data store
- Uses passportjs for authentication
- Uses formidable for image upload


### TBD
- use Grunt & Bower to automate build & Deployment
- use connect-roles to really enable RBAC 
- use Angular in UI (currently using JADE)
- Develop preview page
- Add cart & transaction flows

