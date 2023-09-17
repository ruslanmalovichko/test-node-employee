# Run command:
```
npm run start
```

# Example post query to add vacancy:
```
curl http://localhost:4000/add-vacancy \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Full-stack Software Engineer", "description":"We are looking to hire a Full-stack Software Engineer to join our team. Our ideal candidate should have a strong technical background with deep expertise in middle layer/server-side logic development with JavaScript (Node.js and React) and a strong willingness to deal with microservices", "tech_stack":"React, Node.js", "requirements":"Solid knowledge of architectural patterns and programming paradigms (OOP, SOLID, DDD, etc.)"}'
```

# Example post query to add user:
```
curl http://localhost:4000/add-user \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Ruslan", "email":"ruslanmalovichko@gmail.com"}'
```

# Example post query to add profile employee:
```
curl http://localhost:4000/add-profile-employee \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"status":true, "vacancy":"615d576c465a5a9f37701875", "user":"615d5791465a5a9f37701879"}'
```

# Example get query to get vacancies:
```
Open in browser: http://localhost:4000/vacancies
```

# Example get query to get users:
```
Open in browser: http://localhost:4000/users
```

# Example get query to get profiles employee:
```
Open in browser: http://localhost:4000/profiles-employee
```

# Run TypeScript linter:
```
npx ts-standard
```

# Run TypeScript linter with fixing
```
npx ts-standard --fix
```

http://localhost:4000/profiles-employee&tech_stack=React

