# Batts Booking Buddy

A modern, responsive booking application for managing sports sessions and appointments.

## 🚀 Features

- **Multi-session Booking**: Book single sessions or packages (1-month/3-month)
- **Skill-based Sessions**: Different levels available (Beginner, Intermediate, Advanced)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript support
- **State Management**: Context API for global state management
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query for efficient data management

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Routing**: React Router v6
- **Form Handling**: React Hook Form with Zod
- **Data Fetching**: TanStack Query (React Query)
- **UI Components**: Radix UI primitives with shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Prerequisites

- Node.js (v16 or later)
- npm (v8 or later) or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd batts-booking-buddy
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   ```

### Running Locally

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

## 🗂 Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configs
├── pages/          # Page components
│   ├── Advanced.tsx
│   ├── Beginner.tsx
│   ├── BookingDetails.tsx
│   ├── BookingList.tsx
│   ├── BookingSummary.tsx
│   ├── Contact.tsx
│   ├── Index.tsx
│   ├── Intermediate.tsx
│   └── NotFound.tsx
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## 📝 Booking Flow

1. User selects a skill level (Beginner/Intermediate/Advanced)
2. Chooses booking type (Single session/1-month/3-month package)
3. Selects available dates
4. Provides personal and payment information
5. Reviews booking summary
6. Completes the booking

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the fast development experience
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
