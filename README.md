## Installation

1. Clone the repository:

   ```bash
   git clone [repository URL]
   cd course-hub-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the necessary
   environment variables e.g...

```
NEXTAUTH_URL=http://localhost:3000/sign-in
NEXTAUTH_SECRET=anyName

GITHUB_ID=idNumber
GITHUB_SECRET=SecretKey
```

## Usage

To start the development server, run:

```bash
npm run dev
```

Access the website at `http://localhost:3000`.
