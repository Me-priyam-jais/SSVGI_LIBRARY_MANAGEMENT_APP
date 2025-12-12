import React, { useEffect, useState } from "react";
import logo_with_title from "../assets/logo-with-title-black.png";
import returnIcon from "../assets/redo.png";
import browseIcon from "../assets/pointing.png";
import bookIcon from "../assets/book-square.png";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import logo from "../assets/black-logo.png";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const UserDashboard = () => {
  const { settingPopup } = useSelector((state) => state.popup);
  const { userBorrowedBooks } = useSelector((state) => state.borrow);

  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
  const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);
  useEffect(() => {
    let numberOfTotalBorrowedBooks = userBorrowedBooks.filter(
      (book) => book.returnDate || book.returnDate === null
    );
    console.log(numberOfTotalBorrowedBooks);
    let numberOfTotalReturnedBooks = userBorrowedBooks.filter(
      (book) => book.returnDate
    );

    setTotalBorrowedBooks(numberOfTotalBorrowedBooks.length);
    setTotalReturnedBooks(numberOfTotalReturnedBooks.length);
  }, [userBorrowedBooks]);

  const data = {
    labels: ["Total Borrowed Books", "Total Returned Books"],
    datasets: [
      {
        data: [totalBorrowedBooks, totalReturnedBooks],
        backgroundColor: ["#3D3E3E", "#151619"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <main className="relative flex-1 p-6 pt-28">
        <Header />

        <div className="flex flex-col xl:flex-row gap-10">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-7 flex-[4] xl:min-h-[86vh] justify-between">
            {/* Borrow + Returned */}
            <div className="flex flex-col gap-7">
              <div className="flex flex-col lg:flex-row gap-7">
                {/* Borrowed */}
                <div className="flex items-center gap-4 bg-white p-5 min-h-[120px] rounded-lg transition hover:shadow-inner duration-300">
                  <span className="w-[2px] bg-black h-20 lg:h-full"></span>
                  <span className="bg-gray-300 h-20 lg:h-full min-w-20 flex justify-center items-center rounded-lg">
                    <img src={bookIcon} alt="book-icon" className="w-8 h-8" />
                  </span>
                  <p className="text-lg xl:text-xl font-semibold">
                    Your Borrowed Book List
                  </p>
                </div>

                {/* Returned */}
                <div className="flex items-center gap-4 bg-white p-5 min-h-[120px] rounded-lg transition hover:shadow-inner duration-300">
                  <span className="w-[2px] bg-black h-20 lg:h-full"></span>
                  <span className="bg-gray-300 h-20 lg:h-full min-w-20 flex justify-center items-center rounded-lg">
                    <img
                      src={returnIcon}
                      alt="return-icon"
                      className="w-8 h-8"
                    />
                  </span>
                  <p className="text-lg xl:text-xl font-semibold">
                    Your Returned Book List
                  </p>
                </div>
              </div>

              {/* Browse + Logo */}
              <div className="flex flex-col lg:flex-row gap-7">
                <div className="flex items-center gap-4 bg-white p-5 min-h-[100x] rounded-lg transition hover:shadow-inner duration-300 flex-[2]">
                  <span className="w-[2px] bg-black h-20 lg:h-full"></span>
                  <span className="bg-gray-300 h-20 lg:h-full min-w-20 flex justify-center items-center rounded-lg">
                    <img
                      src={browseIcon}
                      alt="browse-icon"
                      className="w-8 h-8"
                    />
                  </span>
                  <p className="text-lg xl:text-xl font-semibold">
                    Let's browse books inventory
                  </p>
                </div>

                <img
                  src={logo_with_title}
                  alt="LOGO"
                  className="hidden lg:block w-[220px] h-auto object-contain"
                />
              </div>
            </div>

            {/* QUOTE BOX */}
            <div className="bg-white p-7 text-xl xl:text-3xl min-h-[180px] rounded-2xl font-semibold flex items-center relative">
              <h4 className="leading-snug">
                "Embarking on the journey of reading fosters personal growth,
                nurturing a path towards excellence and the refinement of
                character."
              </h4>
              <p className="absolute right-10 bottom-3 text-gray-700 text-sm sm:text-base">
                ~ SSVGI LIB
              </p>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center flex-[2] gap-10 justify-center xl:gap-20">
            {/* PIE CHART */}
            <div className="w-full flex justify-center xl:flex-[4]">
              <Pie
                data={data}
                options={{ cutout: 0 }}
                className="w-full max-w-[420px]"
              />
            </div>

            {/* LEGEND BOX */}
            <div className="flex items-center p-6 gap-5 bg-white rounded-lg w-full sm:w-[360px] xl:w-auto xl:flex-1 min-h-[150px]">
              <img src={logo} alt="LOGO" className="w-auto h-12" />
              <span className="w-[2px] bg-black h-full"></span>

              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-[#3D3E3E]"></span>
                  <span>Total Borrowed Books : {totalBorrowedBooks}</span>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full bg-[#151619]"></span>
                  <span>Total Returned Books : {totalReturnedBooks}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
