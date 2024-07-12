import React, { useState, useEffect } from "react";

interface TimeSlot {
  time: string;
  period: string;
  available: boolean;
}

type Props = {
  startTime: string;
  closeTime: string;
  duration: string;
  selectedDate: Date | null;
  slotStart: string | null;
  setSlotStart: React.Dispatch<React.SetStateAction<string | null>>;
  slotEnd: string | null;
  setSlotEnd: React.Dispatch<React.SetStateAction<string | null>>;
  booked: { startTime: string; endTime: string }[];
  isOpen: Boolean;
};

export function TimeBlocksList(props: Props) {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<{
    start: string;
    end: string;
  } | null>(null);

  useEffect(() => {
    const openTime = props.startTime;
    const closeTime = props.closeTime;
    const duration = parseInt(props.duration, 10) * 10; // in minutes
    console.log("Booked", props.booked);

    console.log("Open Time:", openTime);
    console.log("Close Time:", closeTime);
    console.log("Duration:", duration);

    if (openTime && closeTime && duration) {
      const generatedSlots = generateTimeSlots(
        openTime,
        closeTime,
        duration,
        props.booked
      );
      setTimeSlots(generatedSlots);

      console.log("Generated Time Slots:", generatedSlots);
    }
  }, [
    props.startTime,
    props.closeTime,
    props.duration,
    props.selectedDate,
    props.booked,
  ]);

  function generateTimeSlots(
    openTime: string,
    closeTime: string,
    duration: number,
    booked: { startTime: string; endTime: string }[]
  ): TimeSlot[] {
    const periods = ["Morning", "Afternoon", "Evening"];

    function timeToMinutes(time: string): number {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    }

    function minutesToTime(minutes: number): string {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
        2,
        "0"
      )}`;
    }

    function isTimeSlotBooked(
      startMinutes: number,
      endMinutes: number,
      bookedSlots: { startTime: string; endTime: string }[]
    ): boolean {
      return bookedSlots.some((slot) => {
        const slotStart = timeToMinutes(slot.startTime);
        const slotEnd = timeToMinutes(slot.endTime);
        return startMinutes < slotEnd && endMinutes > slotStart;
      });
    }

    const openMinutes = timeToMinutes(openTime);
    const closeMinutes = timeToMinutes(closeTime);
    const durationMinutes = duration;

    let currentMinutes = openMinutes;

    const morningEnd = timeToMinutes("12:00");
    const afternoonEnd = timeToMinutes("16:00");

    const slots: TimeSlot[] = [];

    const now = new Date();
    const currentDateMinutes = now.getHours() * 60 + now.getMinutes();

    while (currentMinutes + durationMinutes <= closeMinutes) {
      const endMinutes = currentMinutes + durationMinutes;
      let period = periods[0];

      if (currentMinutes >= morningEnd && currentMinutes < afternoonEnd) {
        period = periods[1];
      } else if (currentMinutes >= afternoonEnd) {
        period = periods[2];
      }

      const isToday =
        props.selectedDate &&
        props.selectedDate.toDateString() === now.toDateString();
      const isPast =
        props.selectedDate && props.selectedDate < new Date(now.toDateString());
      const isTimePast = isToday && currentMinutes < currentDateMinutes;
      const isBooked = isTimeSlotBooked(currentMinutes, endMinutes, booked);

      const timeSlot: TimeSlot = {
        time: `${minutesToTime(currentMinutes)} - ${minutesToTime(endMinutes)}`,
        period: period,
        available: !isPast && !isTimePast && !isBooked,
      };

      slots.push(timeSlot);
      currentMinutes = endMinutes;
    }

    return slots;
  }

  function handleSlotClick(start: string, end: string) {
    setSelectedSlot({ start, end });
    props.setSlotStart(start);
    props.setSlotEnd(end);
  }

  return (
    <div className="flex flex-row bg-white border border-gray-200 rounded-md py-2 px-4">
      {props.isOpen ? (
        <div>
          {" "}
          {["Morning", "Afternoon", "Evening"].map((period) => (
            <div
              key={period}
              style={{
                margin: "0 10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ textAlign: "center" }}>{period}</h4>
              {timeSlots
                .filter((slot) => slot.period === period)
                .map((slot, index) => {
                  const [start, end] = slot.time.split(" - ");
                  const isSelected =
                    selectedSlot &&
                    selectedSlot.start === start &&
                    selectedSlot.end === end;
                  return (
                    <div
                      key={index}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        pointerEvents: slot.available ? "auto" : "none",
                        cursor: slot.available ? "pointer" : "default",
                        ...styles.timeSlot,
                        ...(slot.available
                          ? styles.available
                          : styles.unavailable),
                        ...(isSelected ? styles.selected : {}),
                      }}
                      onClick={() =>
                        slot.available && handleSlotClick(start, end)
                      }
                    >
                      {slot.time}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      ) : (
        <span>Salon is closed</span>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  timeSlot: {
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    textAlign: "center",
  },
  unavailable: {
    backgroundColor: "#e0e0e0",
  },
  available: {
    backgroundColor: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  selected: {
    backgroundColor: "#d0f0c0",
  },
};
