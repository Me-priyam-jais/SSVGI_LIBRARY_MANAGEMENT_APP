import React, { useEffect, useState } from "react";
import logo_with_title from "../assets/logo-with-title-black.png";
import returnIcon from "../assets/redo.png";
import browseIcon from "../assets/pointing.png";
import bookIcon from "../assets/book-square.png";
import { Pie } from "react-chartjs-2";

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
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
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
  const dispatch = useDispatch();
  const { settingPopup } = useSelector((state) => state.popup);
  const { userBorrowedBooks } = useSelector((state) => state.borrow);
  const [totalBorrrowedBooks, setTotalBorrrowedBooks] = useState(0);
  const [totalReturnBooks, settotalReturnedBooks] = useState(0);

  useEffect(() => {
    let numberOfTotalBorrowedBooks = userBorrowedBooks.filter(
      (book) => book.returned === false
    );
    let numberOfTotalReturnedBooks = userBorrowedBooks.filter(
      (book) => book.returned === true
    );
    setTotalBorrrowedBooks(numberOfTotalBorrowedBooks);
    settotalReturnedBooks(numberOfTotalReturnedBooks);
  }, [userBorrowedBooks]);
  const data = {
    labels: ["Total Borrowed Books", "Toal Returned Books"],
    dataSets: [
      {
        data: [totalBorrrowedBooks, totalReturnBooks],
        backgroundColor: ["#3D3E3E", "#151619"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <main className="relative flex-1 p-6 pt-28">
        <Header />
        <div className="flex flex-col-reverse xl:flex-row">
          {/* Left side */}
          <div className="flex flex-[4] flex-col gap-7 lg:gap-7 xl:gap-7 lg:py-5 justify-between xl:min-h-[85.5vh]">
            <div className="flex flex-col gap-7 flex-[4]">
              <div className="flex flex-col lg:flow-root  gap07 overflow-y-hidden">
                <div className="flex items-center gap-3 bg-white p-5 min-h=[120px] overflow-y-hidden rounded-lg transition hover-shadow-inner duration-300 mb-2">
                  <span className="w-[2px] bg-black h-20 lg:h-full"> </span>
                  <span className="bg-gray-300 h-20  lg:h-full">
                    <img className="w-8 h-8" src={bookIcon} alt="book-icon" />
                  </span>
                  <p className="text-lg xl:text-xl font-semibold">
                    Your Borrowed Book List
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white p-5 min-h=[120px] overflow-y-hidden rounded-lg transition hover-shadow-inner duration-300">
                  <span className="w-[2px] bg-black h-20 lg:h-full"> </span>
                  <span className="bg-gray-300 h-20  lg:h-full">
                    <img
                      className="w-8 h-8"
                      src={returnIcon}
                      alt="return-icon"
                    />
                  </span>
                  <p className="text-lg xl:text-xl font-semibold">
                    Your Returned Book List
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md max-w-[360px]">
                  <span className="w-[3px] bg-black h-14"></span>

                  <div className="bg-gray-200 h-14 w-14 flex justify-center items-center rounded-md">
                    <img
                      className="w-6 h-6 opacity-80"
                      src={browseIcon}
                      alt="browse-icon"
                    />
                  </div>

                  <p className="text-base lg:text-lg font-semibold leading-tight">
                    Let's Explore Books Inventory.
                  </p>
                </div>
                <img
                  src={logo_with_title}
                  alt="logo"
                  className="hidden lg:block w-40 ml-40 opacity-90"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-7 text-lg sm:text-xl xl:text-3xl 2xl:text-4xl min-h-52 font-semibold relative flex-[3] flex justify-center itesm-center rounded-2xl">
            <h4 className="overflow-y-hidden "></h4>
            <p className="text-gray-700 text-sm sm:text-lg absolute right-[35px] sm:right-[78px] bottom-[10px]">
              ~ SSVGI LIB
            </p>
          </div>
          {/* Right side */}
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
