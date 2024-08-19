import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 ml-2 text-gray-400"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TimePicker = ({ selectedTime, onTimeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 12 }, (_, i) =>
    (i * 5).toString().padStart(2, "0")
  );

  const handleTimeChange = (type, value) => {
    const [currentHour, currentMinute] = selectedTime.split(":");
    let newTime;
    if (type === "hour") {
      newTime = `${value}:${currentMinute}`;
    } else {
      newTime = `${currentHour}:${value}`;
    }
    onTimeChange(newTime);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-start">
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <button className="flex items-center justify-between w-32 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            {selectedTime}
            <ClockIcon />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="bg-white rounded-md shadow-lg">
            <div className="flex p-2">
              <div className="w-16 mr-2 overflow-y-auto h-52">
                {hours.map((hour) => (
                  <button
                    key={hour}
                    className={`w-full py-1 text-sm ${
                      selectedTime.split(":")[0] === hour
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleTimeChange("hour", hour)}
                  >
                    {hour}
                  </button>
                ))}
              </div>
              <div className="w-16 overflow-y-auto h-52">
                {minutes.map((minute) => (
                  <button
                    key={minute}
                    className={`w-full py-1 text-sm ${
                      selectedTime.split(":")[1] === minute
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleTimeChange("minute", minute)}
                  >
                    {minute}
                  </button>
                ))}
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default TimePicker;
