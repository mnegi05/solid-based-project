# solid-based-project
nodeJS project based on solid principle


# SOLID Principles Implementation in this project:
 
 S - Single Responsibility Principle (SRP)
    Each class or module should have only one reason to change.

 O - Open/Closed Principle (OCP)
    Software entities should be open for extension but closed for modification.

 L - Liskov Substitution Principle (LSP)
    Subtypes must be substitutable for their base types without altering correctness.

 I - Interface Segregation Principle (ISP)
    Clients should not be forced to depend on interfaces they do not use.

 D - Dependency Inversion Principle (DIP)
    Depend on abstractions, not on concretions.

## folder structure of the project
src/
 ├── controllers/
 │    └── OrderController.js
 ├── services/
 │    ├── OrderService.js
 │    ├── PaymentService.js
 │    └── NotificationService.js
 ├── repositories/
 │    └── OrderRepository.js
 ├── interfaces/
 │    ├── IPayment.js
 │    └── INotification.js
 ├── implementations/
 │    ├── UpiPayment.js
 │    ├── CardPayment.js
 │    ├── EmailNotification.js
 │    └── SmsNotification.js
 ├── models/
 │    └── Order.js
 └── app.js

 
 ## To make this production-ready:
 - Add new payment method WITHOUT modifying existing code 
 - Add Database (MongoDB / PostgreSQL) 
 - Add Validation (Joi / Zod) 
 - Add Logging (Winston) 
 - Add Error Handling Middleware 
 - Add Rate Limiter Middleware 
 - Add Unit Tests (Jest) 
 - Use DI Framework (like inversify)

## production-ready Architecture
src/
 ├── config/              # DB, logger, env
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── interfaces/
 ├── implementations/
 ├── middlewares/
 ├── validators/
 ├── utils/
 ├── container/           # DI (Inversify)
 ├── models/
 ├── tests/
 └── app.js

## production-style Node.js project that includes:
✅ SOLID + Clean Architecture
✅ PostgreSQL (via Prisma)
✅ JWT Authentication + Role-Based Access
✅ Validation (Zod), Logging (Winston), Rate limiting, Error handling
✅ DI (Inversify), Unit tests (Jest)

solid-based-project/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── interfaces/
│   ├── implementations/
│   ├── middlewares/
│   ├── validators/
│   ├── container/
│   ├── models/
│   ├── utils/
│   └── app.js
├── prisma/
│   └── schema.prisma
├── tests/
├── .env
├── package.json
└── README.md

 