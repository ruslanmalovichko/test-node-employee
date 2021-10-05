# Run command:
```
npm run start
```

# Example post query:
```
curl http://localhost:4000/add-vacancy \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Full-stack Software Engineer", "description":"We are looking to hire a Full-stack Software Engineer to join our team. Our ideal candidate should have a strong technical background with deep expertise in middle layer/server-side logic development with JavaScript (Node.js and React) and a strong willingness to deal with microservices", "tech_stack":"React, Node.js", "requirements":"Solid knowledge of architectural patterns and programming paradigms (OOP, SOLID, DDD, etc.)"}'
```

# Run TypeScript linter:
```
npx ts-standard
```

# Run TypeScript linter with fixing
```
npx ts-standard --fix
```

