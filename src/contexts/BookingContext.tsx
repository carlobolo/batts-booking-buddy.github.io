
import { createContext, useContext, useState, ReactNode } from "react";

type BookingType = "month3" | "month1" | "single" | null;
type SelectedMonth = string | null;

interface BookingContextType {
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
  bookingType: BookingType;
  setBookingType: (type: BookingType) => void;
  selectedMonth: SelectedMonth;
  setSelectedMonth: (month: SelectedMonth) => void;
  totalCost: number;
  setTotalCost: (cost: number) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  playerName: string;
  setPlayerName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  discountCode: string;
  setDiscountCode: (code: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [bookingType, setBookingType] = useState<BookingType>(null);
  const [selectedMonth, setSelectedMonth] = useState<SelectedMonth>(null);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [customerName, setCustomerName] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [discountCode, setDiscountCode] = useState<string>("");

  return (
    <BookingContext.Provider
      value={{
        selectedDates,
        setSelectedDates,
        bookingType,
        setBookingType,
        selectedMonth,
        setSelectedMonth,
        totalCost,
        setTotalCost,
        customerName,
        setCustomerName,
        playerName,
        setPlayerName,
        email,
        setEmail,
        discountCode,
        setDiscountCode,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
