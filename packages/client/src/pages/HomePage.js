import React, { useState } from "react";
import "./HomePage.css";
import "./TaskPage.js";
import { Link } from "react-router-dom";
import Login from "../components/login";
import Signup from "../components/signup";
import { Button } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const [showLoginModal, setLoginShowModal] = useState(false);
  const [showSignupModal, setSignupShowModal] = useState(false);

  const handleOpenLoginModal = () => setLoginShowModal(true);
  const handleCloseLoginModal = () => setLoginShowModal(false);

  const handleOpenSignupModal = () => setSignupShowModal(true);
  const handleCloseSignupModal = () => setSignupShowModal(false);

  const handleSignupError = (error) => {
    toast.error(`Error: ${error.response.status}: ${error.response.data.error}`);
  };

  const logo = document.querySelectorAll("#logo path");
  /*for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  }*/

  return (
    <div className="home-page">
      <div className="parent">
        <svg
          id="logo"
          width="662"
          height="135"
          viewBox="0 0 662 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_1_5"
            maskUnits="userSpaceOnUse"
            x="-0.191986"
            y="0.40799"
            width="662"
            height="135"
          >
            <rect
              fill="white"
              x="-0.191986"
              y="0.40799"
              width="662"
              height="135"
            />
            <path d="M4.80801 12.216C14.3653 8.97332 24.264 7.35199 34.504 7.35199C44.744 7.35199 53.2347 9.52799 59.976 13.88C66.7173 18.232 70.088 24.888 70.088 33.848C70.088 42.808 66.9307 50.36 60.616 56.504C54.3013 62.5627 46.7067 65.592 37.832 65.592C31.3467 65.592 28.104 63.1173 28.104 58.168C28.104 56.632 28.4027 55.0107 29 53.304C31.304 53.9013 33.3947 54.2 35.272 54.2C41.16 54.2 45.5973 52.5787 48.584 49.336C51.656 46.0933 53.192 41.6133 53.192 35.896C53.192 30.0933 51.5707 25.784 48.328 22.968C45.0854 20.152 40.5627 18.744 34.76 18.744C31.7733 18.744 28.1467 19.256 23.88 20.28C23.1973 30.776 22.856 40.0773 22.856 48.184C22.856 70.8827 23.752 87.3093 25.544 97.464C22.8133 98.488 19.912 99 16.84 99C13.768 99 11.08 98.0187 8.77601 96.056C6.55735 94.0933 5.44801 91.4907 5.44801 88.248C5.44801 85.0053 5.87468 79.3733 6.72801 71.352C7.58135 63.2453 8.00801 56.76 8.00801 51.896C8.00801 37.048 6.94135 23.8213 4.80801 12.216Z" />
            <path d="M98.097 97.464C95.4517 98.488 92.6357 99 89.649 99C86.6624 99 84.2303 98.3173 82.353 96.952C80.561 95.5013 79.665 93.5387 79.665 91.064C79.665 88.504 80.049 83.896 80.817 77.24C81.585 70.584 81.969 64.1413 81.969 57.912C81.969 51.5973 80.9877 44.216 79.025 35.768C81.7557 34.744 84.4437 34.232 87.089 34.232C89.7344 34.232 91.9957 35.128 93.873 36.92C95.8357 38.712 96.817 41.1013 96.817 44.088C96.817 45.624 96.561 47.928 96.049 51C95.537 53.9867 95.2383 56.248 95.153 57.784C98.481 50.1893 102.406 44.2587 106.929 39.992C111.537 35.64 116.102 33.464 120.625 33.464C123.782 33.464 126.3 34.5733 128.177 36.792C130.054 39.0107 130.993 41.8267 130.993 45.24C130.993 48.568 130.14 51.2987 128.433 53.432C126.726 55.48 124.593 56.504 122.033 56.504C119.558 56.504 117.553 56.248 116.017 55.736C116.273 54.712 116.401 53.7733 116.401 52.92C116.401 49.4213 115.164 47.672 112.689 47.672C108.934 47.672 105.393 51.4693 102.065 59.064C98.8224 66.5733 96.6464 73.6133 95.537 80.184C95.9637 86.584 96.817 92.344 98.097 97.464Z" />
            <path d="M138.293 35.384C141.024 34.616 143.754 34.232 146.485 34.232C149.301 34.232 151.69 35.0853 153.653 36.792C155.616 38.4987 156.597 40.7173 156.597 43.448C156.597 46.0933 156.128 50.744 155.189 57.4C154.336 63.9707 153.909 69.0907 153.909 72.76C153.909 82.3173 154.805 90.552 156.597 97.464C153.952 98.488 151.093 99 148.021 99C144.949 99 142.517 98.3173 140.725 96.952C138.933 95.5013 138.037 93.4533 138.037 90.808C138.037 88.0773 138.549 83.64 139.573 77.496C140.597 71.352 141.109 66.2747 141.109 62.264C141.109 51.5973 140.17 42.6373 138.293 35.384ZM139.957 6.45599C142.944 5.09065 145.888 4.40799 148.789 4.40799C151.69 4.40799 153.824 5.17599 155.189 6.71199C156.64 8.16265 157.365 10.3387 157.365 13.24C157.365 16.1413 156.384 18.7013 154.421 20.92C152.544 23.1387 150.069 24.248 146.997 24.248C140.682 24.248 137.525 20.9627 137.525 14.392C137.525 11.4907 138.336 8.84532 139.957 6.45599Z" />
            <path d="M193.702 100.536C184.315 100.536 177.403 97.8053 172.966 92.344C168.529 86.7973 166.31 79.1173 166.31 69.304C166.31 59.4053 169.254 50.8293 175.142 43.576C181.03 36.3227 188.582 32.696 197.798 32.696C216.742 32.696 226.214 43.3627 226.214 64.696C226.214 74.68 223.142 83.1707 216.998 90.168C210.854 97.08 203.089 100.536 193.702 100.536ZM184.486 46.776C182.95 51.7253 182.182 56.6747 182.182 61.624C182.182 66.5733 182.353 70.4133 182.694 73.144C183.035 75.8747 183.675 78.6053 184.614 81.336C186.577 86.8827 190.417 89.656 196.134 89.656C201.937 89.656 205.734 88.12 207.526 85.048C209.403 81.976 210.342 77.24 210.342 70.84C210.342 52.664 206.033 43.576 197.414 43.576C192.465 43.576 188.155 44.6427 184.486 46.776Z" />
            <path d="M255.097 97.464C252.452 98.488 249.636 99 246.649 99C243.662 99 241.23 98.3173 239.353 96.952C237.561 95.5013 236.665 93.5387 236.665 91.064C236.665 88.504 237.049 83.896 237.817 77.24C238.585 70.584 238.969 64.1413 238.969 57.912C238.969 51.5973 237.988 44.216 236.025 35.768C238.756 34.744 241.444 34.232 244.089 34.232C246.734 34.232 248.996 35.128 250.873 36.92C252.836 38.712 253.817 41.1013 253.817 44.088C253.817 45.624 253.561 47.928 253.049 51C252.537 53.9867 252.238 56.248 252.153 57.784C255.481 50.1893 259.406 44.2587 263.929 39.992C268.537 35.64 273.102 33.464 277.625 33.464C280.782 33.464 283.3 34.5733 285.177 36.792C287.054 39.0107 287.993 41.8267 287.993 45.24C287.993 48.568 287.14 51.2987 285.433 53.432C283.726 55.48 281.593 56.504 279.033 56.504C276.558 56.504 274.553 56.248 273.017 55.736C273.273 54.712 273.401 53.7733 273.401 52.92C273.401 49.4213 272.164 47.672 269.689 47.672C265.934 47.672 262.393 51.4693 259.065 59.064C255.822 66.5733 253.646 73.6133 252.537 80.184C252.964 86.584 253.817 92.344 255.097 97.464Z" />
            <path d="M295.293 35.384C298.024 34.616 300.754 34.232 303.485 34.232C306.301 34.232 308.69 35.0853 310.653 36.792C312.616 38.4987 313.597 40.7173 313.597 43.448C313.597 46.0933 313.128 50.744 312.189 57.4C311.336 63.9707 310.909 69.0907 310.909 72.76C310.909 82.3173 311.805 90.552 313.597 97.464C310.952 98.488 308.093 99 305.021 99C301.949 99 299.517 98.3173 297.725 96.952C295.933 95.5013 295.037 93.4533 295.037 90.808C295.037 88.0773 295.549 83.64 296.573 77.496C297.597 71.352 298.109 66.2747 298.109 62.264C298.109 51.5973 297.17 42.6373 295.293 35.384ZM296.957 6.45599C299.944 5.09065 302.888 4.40799 305.789 4.40799C308.69 4.40799 310.824 5.17599 312.189 6.71199C313.64 8.16265 314.365 10.3387 314.365 13.24C314.365 16.1413 313.384 18.7013 311.421 20.92C309.544 23.1387 307.069 24.248 303.997 24.248C297.682 24.248 294.525 20.9627 294.525 14.392C294.525 11.4907 295.336 8.84532 296.957 6.45599Z" />
            <path d="M332.398 15.416C335.129 14.0507 337.902 13.368 340.718 13.368C343.534 13.368 345.795 14.264 347.502 16.056C349.294 17.848 350.19 20.4933 350.19 23.992C350.19 27.4907 349.977 31.4587 349.55 35.896C355.95 35.896 362.051 35 367.854 33.208C368.878 34.9147 369.39 36.92 369.39 39.224C369.39 41.4427 368.366 43.2773 366.318 44.728C364.355 46.0933 362.35 46.776 360.302 46.776C358.254 46.776 355.95 46.52 353.39 46.008C350.83 45.496 349.166 45.1973 348.398 45.112C348.313 45.88 348.057 47.416 347.63 49.72C347.289 52.024 346.99 54.0293 346.734 55.736C346.051 60.4293 345.71 65.464 345.71 70.84C345.71 82.5307 349.507 88.376 357.102 88.376C359.918 88.376 363.161 87.3947 366.83 85.432C367.939 87.0533 368.494 89.144 368.494 91.704C368.494 94.264 367.086 96.2693 364.27 97.72C361.539 99.0853 358.254 99.768 354.414 99.768C339.395 99.768 331.886 91.2347 331.886 74.168C331.886 71.6933 332.227 67.2133 332.91 60.728C333.678 54.2427 334.062 48.9947 334.062 44.984C329.966 45.24 326.681 45.9653 324.206 47.16C323.182 45.624 322.67 43.8747 322.67 41.912C322.67 39.864 323.395 38.2 324.846 36.92C326.297 35.5547 328.089 34.872 330.222 34.872C332.355 34.872 333.763 34.9147 334.446 35C334.531 34.3173 334.574 33.4213 334.574 32.312C334.574 25.912 333.849 20.28 332.398 15.416Z" />
            <path d="M379.314 77.752L380.594 59.32C380.594 51.0427 379.399 43.192 377.01 35.768C379.399 34.744 382.343 34.232 385.842 34.232C392.669 34.232 396.082 38.0293 396.082 45.624C396.082 49.0373 395.613 53.8587 394.674 60.088C393.735 66.3173 393.266 70.6267 393.266 73.016C393.266 75.32 393.309 77.0267 393.394 78.136C393.479 79.16 393.693 80.3973 394.034 81.848C394.546 84.7493 396.21 86.2 399.026 86.2C401.927 86.2 404.999 83.9387 408.242 79.416C411.57 74.808 414.215 69.7307 416.178 64.184C418.226 58.6373 419.25 54.2427 419.25 51C418.823 44.2587 418.098 39.1813 417.074 35.768C419.805 34.744 422.578 34.232 425.394 34.232C428.295 34.232 430.685 35.128 432.562 36.92C434.525 38.712 435.506 41.1013 435.506 44.088C435.506 90.68 426.973 118.627 409.906 127.928C406.066 129.976 401.714 131 396.85 131C391.986 131 387.719 129.72 384.05 127.16C380.466 124.6 378.674 121.016 378.674 116.408C378.674 113.336 379.826 110.733 382.13 108.6C384.434 106.552 387.165 105.528 390.322 105.528C391.005 105.528 391.858 105.613 392.882 105.784C392.626 106.893 392.498 107.875 392.498 108.728C392.498 116.237 395.101 119.992 400.306 119.992C403.463 119.992 406.322 118.285 408.882 114.872C411.442 111.459 413.49 107.277 415.026 102.328C418.013 92.2587 419.506 83.128 419.506 74.936C416.946 81.848 413.447 87.4373 409.01 91.704C404.658 95.8853 399.922 97.976 394.802 97.976C384.477 97.976 379.314 91.2347 379.314 77.752Z" />
            <path d="M485.808 12.216C495.365 8.97332 505.264 7.35199 515.504 7.35199C525.744 7.35199 534.235 9.52799 540.976 13.88C547.717 18.232 551.088 24.888 551.088 33.848C551.088 42.808 547.931 50.36 541.616 56.504C535.301 62.5627 527.707 65.592 518.832 65.592C512.347 65.592 509.104 63.1173 509.104 58.168C509.104 56.632 509.403 55.0107 510 53.304C512.304 53.9013 514.395 54.2 516.272 54.2C522.16 54.2 526.597 52.5787 529.584 49.336C532.656 46.0933 534.192 41.6133 534.192 35.896C534.192 30.0933 532.571 25.784 529.328 22.968C526.085 20.152 521.563 18.744 515.76 18.744C512.773 18.744 509.147 19.256 504.88 20.28C504.197 30.776 503.856 40.0773 503.856 48.184C503.856 70.8827 504.752 87.3093 506.544 97.464C503.813 98.488 500.912 99 497.84 99C494.768 99 492.08 98.0187 489.776 96.056C487.557 94.0933 486.448 91.4907 486.448 88.248C486.448 85.0053 486.875 79.3733 487.728 71.352C488.581 63.2453 489.008 56.76 489.008 51.896C489.008 37.048 487.941 23.8213 485.808 12.216Z" />
            <path d="M564.801 69.944C564.801 76.088 565.782 80.952 567.745 84.536C569.708 88.0347 572.993 89.784 577.601 89.784C582.209 89.784 585.793 88.248 588.353 85.176C590.998 82.0187 592.321 78.2213 592.321 73.784C595.222 73.784 597.74 74.5093 599.873 75.96C602.006 77.4107 603.073 79.416 603.073 81.976C603.073 87.2667 600.257 91.704 594.625 95.288C588.993 98.7867 583.062 100.536 576.833 100.536C567.105 100.536 560.065 97.9333 555.713 92.728C551.361 87.4373 549.185 79.6293 549.185 69.304C549.185 58.9787 552.086 50.3173 557.889 43.32C563.777 36.2373 571.585 32.696 581.313 32.696C587.969 32.696 593.302 34.232 597.313 37.304C601.409 40.2907 603.457 44.984 603.457 51.384C603.457 57.6987 600.556 62.4773 594.753 65.72C589.036 68.8773 582.038 70.456 573.761 70.456C570.86 70.456 567.873 70.2853 564.801 69.944ZM564.929 59.832C567.489 60.344 570.177 60.6 572.993 60.6C579.137 60.6 584.3 59.448 588.481 57.144C588.993 55.096 589.249 53.4747 589.249 52.28C589.249 49.2933 588.182 47.032 586.049 45.496C583.916 43.96 580.972 43.192 577.217 43.192C573.548 43.192 570.22 44.3867 567.233 46.776C565.697 51.2133 564.929 55.5653 564.929 59.832Z" />
            <path d="M620.523 15.416C623.254 14.0507 626.027 13.368 628.843 13.368C631.659 13.368 633.92 14.264 635.627 16.056C637.419 17.848 638.315 20.4933 638.315 23.992C638.315 27.4907 638.102 31.4587 637.675 35.896C644.075 35.896 650.176 35 655.979 33.208C657.003 34.9147 657.515 36.92 657.515 39.224C657.515 41.4427 656.491 43.2773 654.443 44.728C652.48 46.0933 650.475 46.776 648.427 46.776C646.379 46.776 644.075 46.52 641.515 46.008C638.955 45.496 637.291 45.1973 636.523 45.112C636.438 45.88 636.182 47.416 635.755 49.72C635.414 52.024 635.115 54.0293 634.859 55.736C634.176 60.4293 633.835 65.464 633.835 70.84C633.835 82.5307 637.632 88.376 645.227 88.376C648.043 88.376 651.286 87.3947 654.955 85.432C656.064 87.0533 656.619 89.144 656.619 91.704C656.619 94.264 655.211 96.2693 652.395 97.72C649.664 99.0853 646.379 99.768 642.539 99.768C627.52 99.768 620.011 91.2347 620.011 74.168C620.011 71.6933 620.352 67.2133 621.035 60.728C621.803 54.2427 622.187 48.9947 622.187 44.984C618.091 45.24 614.806 45.9653 612.331 47.16C611.307 45.624 610.795 43.8747 610.795 41.912C610.795 39.864 611.52 38.2 612.971 36.92C614.422 35.5547 616.214 34.872 618.347 34.872C620.48 34.872 621.888 34.9147 622.571 35C622.656 34.3173 622.699 33.4213 622.699 32.312C622.699 25.912 621.974 20.28 620.523 15.416Z" />
          </mask>
          <path
            d="M4.80801 12.216C14.3653 8.97332 24.264 7.35199 34.504 7.35199C44.744 7.35199 53.2347 9.52799 59.976 13.88C66.7173 18.232 70.088 24.888 70.088 33.848C70.088 42.808 66.9307 50.36 60.616 56.504C54.3013 62.5627 46.7067 65.592 37.832 65.592C31.3467 65.592 28.104 63.1173 28.104 58.168C28.104 56.632 28.4027 55.0107 29 53.304C31.304 53.9013 33.3947 54.2 35.272 54.2C41.16 54.2 45.5973 52.5787 48.584 49.336C51.656 46.0933 53.192 41.6133 53.192 35.896C53.192 30.0933 51.5707 25.784 48.328 22.968C45.0854 20.152 40.5627 18.744 34.76 18.744C31.7733 18.744 28.1467 19.256 23.88 20.28C23.1973 30.776 22.856 40.0773 22.856 48.184C22.856 70.8827 23.752 87.3093 25.544 97.464C22.8133 98.488 19.912 99 16.84 99C13.768 99 11.08 98.0187 8.77601 96.056C6.55735 94.0933 5.44801 91.4907 5.44801 88.248C5.44801 85.0053 5.87468 79.3733 6.72801 71.352C7.58135 63.2453 8.00801 56.76 8.00801 51.896C8.00801 37.048 6.94135 23.8213 4.80801 12.216Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M98.097 97.464C95.4517 98.488 92.6357 99 89.649 99C86.6624 99 84.2303 98.3173 82.353 96.952C80.561 95.5013 79.665 93.5387 79.665 91.064C79.665 88.504 80.049 83.896 80.817 77.24C81.585 70.584 81.969 64.1413 81.969 57.912C81.969 51.5973 80.9877 44.216 79.025 35.768C81.7557 34.744 84.4437 34.232 87.089 34.232C89.7344 34.232 91.9957 35.128 93.873 36.92C95.8357 38.712 96.817 41.1013 96.817 44.088C96.817 45.624 96.561 47.928 96.049 51C95.537 53.9867 95.2383 56.248 95.153 57.784C98.481 50.1893 102.406 44.2587 106.929 39.992C111.537 35.64 116.102 33.464 120.625 33.464C123.782 33.464 126.3 34.5733 128.177 36.792C130.054 39.0107 130.993 41.8267 130.993 45.24C130.993 48.568 130.14 51.2987 128.433 53.432C126.726 55.48 124.593 56.504 122.033 56.504C119.558 56.504 117.553 56.248 116.017 55.736C116.273 54.712 116.401 53.7733 116.401 52.92C116.401 49.4213 115.164 47.672 112.689 47.672C108.934 47.672 105.393 51.4693 102.065 59.064C98.8224 66.5733 96.6464 73.6133 95.537 80.184C95.9637 86.584 96.817 92.344 98.097 97.464Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M138.293 35.384C141.024 34.616 143.754 34.232 146.485 34.232C149.301 34.232 151.69 35.0853 153.653 36.792C155.616 38.4987 156.597 40.7173 156.597 43.448C156.597 46.0933 156.128 50.744 155.189 57.4C154.336 63.9707 153.909 69.0907 153.909 72.76C153.909 82.3173 154.805 90.552 156.597 97.464C153.952 98.488 151.093 99 148.021 99C144.949 99 142.517 98.3173 140.725 96.952C138.933 95.5013 138.037 93.4533 138.037 90.808C138.037 88.0773 138.549 83.64 139.573 77.496C140.597 71.352 141.109 66.2747 141.109 62.264C141.109 51.5973 140.17 42.6373 138.293 35.384ZM139.957 6.45599C142.944 5.09065 145.888 4.40799 148.789 4.40799C151.69 4.40799 153.824 5.17599 155.189 6.71199C156.64 8.16265 157.365 10.3387 157.365 13.24C157.365 16.1413 156.384 18.7013 154.421 20.92C152.544 23.1387 150.069 24.248 146.997 24.248C140.682 24.248 137.525 20.9627 137.525 14.392C137.525 11.4907 138.336 8.84532 139.957 6.45599Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M193.702 100.536C184.315 100.536 177.403 97.8053 172.966 92.344C168.529 86.7973 166.31 79.1173 166.31 69.304C166.31 59.4053 169.254 50.8293 175.142 43.576C181.03 36.3227 188.582 32.696 197.798 32.696C216.742 32.696 226.214 43.3627 226.214 64.696C226.214 74.68 223.142 83.1707 216.998 90.168C210.854 97.08 203.089 100.536 193.702 100.536ZM184.486 46.776C182.95 51.7253 182.182 56.6747 182.182 61.624C182.182 66.5733 182.353 70.4133 182.694 73.144C183.035 75.8747 183.675 78.6053 184.614 81.336C186.577 86.8827 190.417 89.656 196.134 89.656C201.937 89.656 205.734 88.12 207.526 85.048C209.403 81.976 210.342 77.24 210.342 70.84C210.342 52.664 206.033 43.576 197.414 43.576C192.465 43.576 188.155 44.6427 184.486 46.776Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M255.097 97.464C252.452 98.488 249.636 99 246.649 99C243.662 99 241.23 98.3173 239.353 96.952C237.561 95.5013 236.665 93.5387 236.665 91.064C236.665 88.504 237.049 83.896 237.817 77.24C238.585 70.584 238.969 64.1413 238.969 57.912C238.969 51.5973 237.988 44.216 236.025 35.768C238.756 34.744 241.444 34.232 244.089 34.232C246.734 34.232 248.996 35.128 250.873 36.92C252.836 38.712 253.817 41.1013 253.817 44.088C253.817 45.624 253.561 47.928 253.049 51C252.537 53.9867 252.238 56.248 252.153 57.784C255.481 50.1893 259.406 44.2587 263.929 39.992C268.537 35.64 273.102 33.464 277.625 33.464C280.782 33.464 283.3 34.5733 285.177 36.792C287.054 39.0107 287.993 41.8267 287.993 45.24C287.993 48.568 287.14 51.2987 285.433 53.432C283.726 55.48 281.593 56.504 279.033 56.504C276.558 56.504 274.553 56.248 273.017 55.736C273.273 54.712 273.401 53.7733 273.401 52.92C273.401 49.4213 272.164 47.672 269.689 47.672C265.934 47.672 262.393 51.4693 259.065 59.064C255.822 66.5733 253.646 73.6133 252.537 80.184C252.964 86.584 253.817 92.344 255.097 97.464Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M295.293 35.384C298.024 34.616 300.754 34.232 303.485 34.232C306.301 34.232 308.69 35.0853 310.653 36.792C312.616 38.4987 313.597 40.7173 313.597 43.448C313.597 46.0933 313.128 50.744 312.189 57.4C311.336 63.9707 310.909 69.0907 310.909 72.76C310.909 82.3173 311.805 90.552 313.597 97.464C310.952 98.488 308.093 99 305.021 99C301.949 99 299.517 98.3173 297.725 96.952C295.933 95.5013 295.037 93.4533 295.037 90.808C295.037 88.0773 295.549 83.64 296.573 77.496C297.597 71.352 298.109 66.2747 298.109 62.264C298.109 51.5973 297.17 42.6373 295.293 35.384ZM296.957 6.45599C299.944 5.09065 302.888 4.40799 305.789 4.40799C308.69 4.40799 310.824 5.17599 312.189 6.71199C313.64 8.16265 314.365 10.3387 314.365 13.24C314.365 16.1413 313.384 18.7013 311.421 20.92C309.544 23.1387 307.069 24.248 303.997 24.248C297.682 24.248 294.525 20.9627 294.525 14.392C294.525 11.4907 295.336 8.84532 296.957 6.45599Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M332.398 15.416C335.129 14.0507 337.902 13.368 340.718 13.368C343.534 13.368 345.795 14.264 347.502 16.056C349.294 17.848 350.19 20.4933 350.19 23.992C350.19 27.4907 349.977 31.4587 349.55 35.896C355.95 35.896 362.051 35 367.854 33.208C368.878 34.9147 369.39 36.92 369.39 39.224C369.39 41.4427 368.366 43.2773 366.318 44.728C364.355 46.0933 362.35 46.776 360.302 46.776C358.254 46.776 355.95 46.52 353.39 46.008C350.83 45.496 349.166 45.1973 348.398 45.112C348.313 45.88 348.057 47.416 347.63 49.72C347.289 52.024 346.99 54.0293 346.734 55.736C346.051 60.4293 345.71 65.464 345.71 70.84C345.71 82.5307 349.507 88.376 357.102 88.376C359.918 88.376 363.161 87.3947 366.83 85.432C367.939 87.0533 368.494 89.144 368.494 91.704C368.494 94.264 367.086 96.2693 364.27 97.72C361.539 99.0853 358.254 99.768 354.414 99.768C339.395 99.768 331.886 91.2347 331.886 74.168C331.886 71.6933 332.227 67.2133 332.91 60.728C333.678 54.2427 334.062 48.9947 334.062 44.984C329.966 45.24 326.681 45.9653 324.206 47.16C323.182 45.624 322.67 43.8747 322.67 41.912C322.67 39.864 323.395 38.2 324.846 36.92C326.297 35.5547 328.089 34.872 330.222 34.872C332.355 34.872 333.763 34.9147 334.446 35C334.531 34.3173 334.574 33.4213 334.574 32.312C334.574 25.912 333.849 20.28 332.398 15.416Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M379.314 77.752L380.594 59.32C380.594 51.0427 379.399 43.192 377.01 35.768C379.399 34.744 382.343 34.232 385.842 34.232C392.669 34.232 396.082 38.0293 396.082 45.624C396.082 49.0373 395.613 53.8587 394.674 60.088C393.735 66.3173 393.266 70.6267 393.266 73.016C393.266 75.32 393.309 77.0267 393.394 78.136C393.479 79.16 393.693 80.3973 394.034 81.848C394.546 84.7493 396.21 86.2 399.026 86.2C401.927 86.2 404.999 83.9387 408.242 79.416C411.57 74.808 414.215 69.7307 416.178 64.184C418.226 58.6373 419.25 54.2427 419.25 51C418.823 44.2587 418.098 39.1813 417.074 35.768C419.805 34.744 422.578 34.232 425.394 34.232C428.295 34.232 430.685 35.128 432.562 36.92C434.525 38.712 435.506 41.1013 435.506 44.088C435.506 90.68 426.973 118.627 409.906 127.928C406.066 129.976 401.714 131 396.85 131C391.986 131 387.719 129.72 384.05 127.16C380.466 124.6 378.674 121.016 378.674 116.408C378.674 113.336 379.826 110.733 382.13 108.6C384.434 106.552 387.165 105.528 390.322 105.528C391.005 105.528 391.858 105.613 392.882 105.784C392.626 106.893 392.498 107.875 392.498 108.728C392.498 116.237 395.101 119.992 400.306 119.992C403.463 119.992 406.322 118.285 408.882 114.872C411.442 111.459 413.49 107.277 415.026 102.328C418.013 92.2587 419.506 83.128 419.506 74.936C416.946 81.848 413.447 87.4373 409.01 91.704C404.658 95.8853 399.922 97.976 394.802 97.976C384.477 97.976 379.314 91.2347 379.314 77.752Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M485.808 12.216C495.365 8.97332 505.264 7.35199 515.504 7.35199C525.744 7.35199 534.235 9.52799 540.976 13.88C547.717 18.232 551.088 24.888 551.088 33.848C551.088 42.808 547.931 50.36 541.616 56.504C535.301 62.5627 527.707 65.592 518.832 65.592C512.347 65.592 509.104 63.1173 509.104 58.168C509.104 56.632 509.403 55.0107 510 53.304C512.304 53.9013 514.395 54.2 516.272 54.2C522.16 54.2 526.597 52.5787 529.584 49.336C532.656 46.0933 534.192 41.6133 534.192 35.896C534.192 30.0933 532.571 25.784 529.328 22.968C526.085 20.152 521.563 18.744 515.76 18.744C512.773 18.744 509.147 19.256 504.88 20.28C504.197 30.776 503.856 40.0773 503.856 48.184C503.856 70.8827 504.752 87.3093 506.544 97.464C503.813 98.488 500.912 99 497.84 99C494.768 99 492.08 98.0187 489.776 96.056C487.557 94.0933 486.448 91.4907 486.448 88.248C486.448 85.0053 486.875 79.3733 487.728 71.352C488.581 63.2453 489.008 56.76 489.008 51.896C489.008 37.048 487.941 23.8213 485.808 12.216Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M564.801 69.944C564.801 76.088 565.782 80.952 567.745 84.536C569.708 88.0347 572.993 89.784 577.601 89.784C582.209 89.784 585.793 88.248 588.353 85.176C590.998 82.0187 592.321 78.2213 592.321 73.784C595.222 73.784 597.74 74.5093 599.873 75.96C602.006 77.4107 603.073 79.416 603.073 81.976C603.073 87.2667 600.257 91.704 594.625 95.288C588.993 98.7867 583.062 100.536 576.833 100.536C567.105 100.536 560.065 97.9333 555.713 92.728C551.361 87.4373 549.185 79.6293 549.185 69.304C549.185 58.9787 552.086 50.3173 557.889 43.32C563.777 36.2373 571.585 32.696 581.313 32.696C587.969 32.696 593.302 34.232 597.313 37.304C601.409 40.2907 603.457 44.984 603.457 51.384C603.457 57.6987 600.556 62.4773 594.753 65.72C589.036 68.8773 582.038 70.456 573.761 70.456C570.86 70.456 567.873 70.2853 564.801 69.944ZM564.929 59.832C567.489 60.344 570.177 60.6 572.993 60.6C579.137 60.6 584.3 59.448 588.481 57.144C588.993 55.096 589.249 53.4747 589.249 52.28C589.249 49.2933 588.182 47.032 586.049 45.496C583.916 43.96 580.972 43.192 577.217 43.192C573.548 43.192 570.22 44.3867 567.233 46.776C565.697 51.2133 564.929 55.5653 564.929 59.832Z"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M620.523 15.416C623.254 14.0507 626.027 13.368 628.843 13.368C631.659 13.368 633.92 14.264 635.627 16.056C637.419 17.848 638.315 20.4933 638.315 23.992C638.315 27.4907 638.102 31.4587 637.675 35.896C644.075 35.896 650.176 35 655.979 33.208C657.003 34.9147 657.515 36.92 657.515 39.224C657.515 41.4427 656.491 43.2773 654.443 44.728C652.48 46.0933 650.475 46.776 648.427 46.776C646.379 46.776 644.075 46.52 641.515 46.008C638.955 45.496 637.291 45.1973 636.523 45.112C636.438 45.88 636.182 47.416 635.755 49.72C635.414 52.024 635.115 54.0293 634.859 55.736C634.176 60.4293 633.835 65.464 633.835 70.84C633.835 82.5307 637.632 88.376 645.227 88.376C648.043 88.376 651.286 87.3947 654.955 85.432C656.064 87.0533 656.619 89.144 656.619 91.704C656.619 94.264 655.211 96.2693 652.395 97.72C649.664 99.0853 646.379 99.768 642.539 99.768C627.52 99.768 620.011 91.2347 620.011 74.168C620.011 71.6933 620.352 67.2133 621.035 60.728C621.803 54.2427 622.187 48.9947 622.187 44.984C618.091 45.24 614.806 45.9653 612.331 47.16C611.307 45.624 610.795 43.8747 610.795 41.912C610.795 39.864 611.52 38.2 612.971 36.92C614.422 35.5547 616.214 34.872 618.347 34.872C620.48 34.872 621.888 34.9147 622.571 35C622.656 34.3173 622.699 33.4213 622.699 32.312C622.699 25.912 621.974 20.28 620.523 15.416Z"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
        <img //Moved this here so I can position it relaitive to the logo
          className="cat-image"
          src="x2/Cat_Down@2x.png"
          alt="cat"
          width="200px"
          height="200px"
        />
      </div>
      <Button className="button-33" variant="primary" onClick={handleOpenLoginModal}>
        Login
      </Button>
      <Login showModal={showLoginModal} handleCloseModal={handleCloseLoginModal} />
      <Button className="button-33" variant="primary" onClick={handleOpenSignupModal}>
        Signup
      </Button>
      <Signup showModal={showSignupModal} handleCloseModal={handleCloseSignupModal} onError={handleSignupError} />
    </div>
  );
}

export default HomePage;
