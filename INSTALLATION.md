# Installation Guide

Complete step-by-step guide to set up and run the N8 Next.js project.

## System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 18.0 or higher
- **Package Manager**: npm (9.0+), yarn (1.22+), or pnpm (8.0+)
- **Git**: Latest version (optional, for version control)

## Step 1: Verify Node.js Installation

Check if Node.js is installed:

```bash
node --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

Check npm version:

```bash
npm --version
```

## Step 2: Navigate to Project Directory

```bash
cd c:\Users\rodri\n8
```

## Step 3: Install Dependencies

This will install all required packages including Next.js, React, Tailwind CSS, and TypeScript.

### Using npm:

```bash
npm install
```

### Using yarn:

```bash
yarn install
```

### Using pnpm:

```bash
pnpm install
```

**Expected installation time**: 2-5 minutes depending on your internet connection.

## Step 4: Verify Installation

After installation completes, verify that the `node_modules` directory was created:

```bash
ls node_modules
```

Or on Windows PowerShell:

```powershell
dir node_modules
```

## Step 5: Start Development Server

Run the development server:

```bash
npm run dev
```

You should see output similar to:

```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

## Step 6: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the N8 welcome page with three feature cards.

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Installation Errors

If you encounter installation errors:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete `node_modules` and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstall:
   ```bash
   npm install
   ```

### Module Not Found Errors

If you see "Module not found" errors:

1. Ensure all dependencies are installed
2. Restart the development server
3. Check that import paths are correct

### TypeScript Errors

If you encounter TypeScript errors:

1. Ensure `tsconfig.json` is present
2. Run type checking:
   ```bash
   npx tsc --noEmit
   ```

### Tailwind CSS Not Working

If styles aren't applying:

1. Check that `tailwind.config.js` exists
2. Verify `globals.css` has Tailwind directives
3. Restart the development server

## Next Steps

After successful installation:

1. Read the [README.md](README.md) for project overview
2. Explore the `app/` directory structure
3. Edit `app/page.tsx` to customize the home page
4. Create new components in the `components/` directory
5. Configure Tailwind in `tailwind.config.js`

## Building for Production

Once development is complete, create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## Support

If you encounter issues not covered in this guide, please:

1. Check the [README.md](README.md) for more information
2. Review Next.js and Tailwind CSS documentation
3. Search for similar issues on Stack Overflow
4. Open an issue in the project repository

---

Happy coding! 🚀

