Backend setup and run instructions

1. Install dependencies

```bash
cd Backend
npm install
```

2. Create `.env` from `.env.example` and fill values

```bash
copy .env.example .env
# then edit .env and set your real MONGO_URI and JWT_SECRET
```

3. Start server

```bash
# development (auto-restarts)
npm run dev

# production
npm start
```

Notes:
- If you previously tried to install a package named `bycrypt`, that is a typo. Use `bcryptjs` which is already listed in `package.json`.
- Ensure MongoDB is reachable from `MONGO_URI` and `JWT_SECRET` is set.