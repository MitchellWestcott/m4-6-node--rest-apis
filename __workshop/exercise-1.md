# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint        | method   | Description            |
| --------------- | -------- | ---------------------- |
| `/test`         | `GET`    | It is a test endpoint. |
| `/`             | `GET`    | homepage for info      |
| `/stock`        | `GET`    | access stock list      |
| `/stock`        | `POST`   | add new stock          |
| `/stock/id`     | `GET`    | access stock item      |
| `/stock/id`     | `PATCH`  | edit info in item      |
| `/stock/id`     | `DELETE` | delete stock item      |
| `/customers`    | `GET`    | get customer info      |
| `/customers`    | `POST`   | add a new customer     |
| `/customers/id` | `GET`    | get specific customer  |
| `/customers/id` | `PATCH`  | edit customer info     |
| `/customers/id` | `DELETE` | delete customer        |
| `/seating`      | `GET`    | access seating list    |
| `/seating`      | `POST`   | add new seating        |
| `/seating/id`   | `GET`    | get specific table     |
| `/seating/id`   | `PATCH`  | edit the seating info  |
| `/seating/id`   | `DELETE` | delete current seating |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer
