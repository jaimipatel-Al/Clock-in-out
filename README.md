# Clock in-out

The Clock In/Out System is a comprehensive time-tracking solution that enables users to log work hours, manage breaks, track tasks, and generate timesheets efficiently. This system ensures accurate reporting of gross hours (total shift duration) and effective hours (working hours excluding breaks).

## Features

### **User Authentication & Registration**

- Users must register to create an account.
- Secure login to access the system.

### **Clock-In/Clock-Out System**

#### **Clock-In (Start Work):**

- Users start their workday by clocking in.
- On the first clock-in of the day, a textbox appears to enter the task list.
- After clocking in, users can only break-in, break-out, or clock-out.

#### **Break Management:**

- Break-In: Pauses the work timer.
- Break-Out: Resumes work after a break.

#### **Clock-Out (End Work):**

- Users must provide a task status update before clocking out.
- Ends the work session and updates the timesheet.

### **Timesheet & Reporting**

- Gross Hours = Time from Clock-In to Clock-Out.
- Effective Hours = Total working time excluding break hours.
- Users can view past timesheet logs grouped weekly.
- Option to filter logs by date to see detailed records of clock-ins and clock-outs.

## Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Tech Stack

- **Frontend:** Nuxt, Vue, Tailwind CSS
- **State Management:** Pinia
- **Validation:** vee-validate, yup
- **Infinite Loader:** vue-infinite-scroll
- **Notifications:** vue-toast-notification
- **API Calls:** axios

### GitHub Repository

- See [GitHub](https://github.com/jaimipatel-Al/Clock-in-out)
- See [Link]()
- See [Swagger]()
