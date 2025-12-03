export function generateVerificationOtpEmailTemplate(OTP_CODE) {
  return `<DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>SSVGI LIB - Verification Code</title>
    </head>
    <body
      style="
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;
      "
    >
      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="background-color: #ffffff; padding: 20px 0"
      >
        <tr>
          <td align="center">
            <table
              width="600"
              cellpadding="0"
              cellspacing="0"
              border="0"
              style="
                background-color: #f7f7f7;
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid #d1d1d1;
              "
            >
              <!-- HEADER -->
              <tr>
                <td style="padding: 20px 24px">
                  <div style="display: flex; align-items: center; gap: 16px">
                    <!-- BLACKISH LOGO -->
                    <div style="width: 60px; height: 60px">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <radialGradient
                            id="darkGrad"
                            cx="50%"
                            cy="50%"
                            r="70%"
                          >
                            <stop offset="0%" stop-color="#e5e5e5" />
                            <stop offset="100%" stop-color="#bfbfbf" />
                          </radialGradient>

                          <filter id="softGlow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>

                        <!-- Grey Circle -->
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="url(#darkGrad)"
                          stroke="#999"
                          stroke-width="2"
                        />

                        <!-- Book Icon in grey-black -->
                        <g transform="translate(20,25)" filter="url(#softGlow)">
                          <!-- Left Page -->
                          <path
                            d="M5 5c6-3 14-3 22 0v30c-8-3-16-3-22 0z"
                            fill="#4d4d4d"
                            opacity="0.95"
                          />

                          <!-- Right Page -->
                          <path
                            d="M27 5c6-3 14-3 22 0v30c-8-3-16-3-22 0z"
                            fill="#222"
                            opacity="0.95"
                          />

                          <!-- Spine -->
                          <rect
                            x="24.5"
                            y="5"
                            width="5"
                            height="30"
                            fill="#000000"
                            opacity="0.4"
                          />
                        </g>

                        <!-- Title -->
                        <text
                          x="50"
                          y="88"
                          font-size="10"
                          fill="#333"
                          font-family="Arial"
                          text-anchor="middle"
                          font-weight="700"
                          letter-spacing="0.8"
                        >
                          SSVGI LIB
                        </text>
                      </svg>
                    </div>

                    <div style="line-height: 1">
                      <div
                        style="font-size: 20px; color: #111; font-weight: 700"
                      >
                        SSVGI LIB
                      </div>
                      <div style="font-size: 13px; color: #555">
                        Verification Code
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <!-- SMALL IMAGE (Converted to grayscale automatically by browser) -->
              <tr>
                <td style="text-align: center; padding-top: 10px">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop&sat=-100"
                    alt="Library"
                    width="220"
                    style="
                      display: block;
                      margin: 0 auto 10px;
                      border-radius: 6px;
                      border: 1px solid #d1d1d1;
                    "
                  />
                </td>
              </tr>

              <!-- CONTENT -->
              <tr>
                <td style="padding: 24px; color: #333; text-align: center">
                  <h1 style="margin: 0; font-size: 22px; color: #000">
                    Your Verification Code
                  </h1>

                  <p
                    style="
                      margin: 10px 0 20px;
                      font-size: 14px;
                      color: #555;
                      line-height: 1.6;
                    "
                  >
                    Please use the code below to verify your identity.<br />
                    This helps keep your account secure.
                  </p>

                  <!-- OTP BOX (black & white theme) -->
                  <div
                    style="
                      display: inline-block;
                      background-color: #ffffff;
                      border: 1px solid #999;
                      padding: 12px 26px;
                      border-radius: 8px;
                      font-size: 18px;
                      letter-spacing: 8px;
                      font-weight: 700;
                      color: #000;
                    "
                  >
                    ${OTP_CODE}
                  </div>

                  <p
                    style="
                      margin: 20px 0 0;
                      font-size: 13px;
                      color: #666;
                      line-height: 1.5;
                    "
                  >
                    This code is valid for <strong>10 minutes</strong>.<br />
                    If you didn't request this, you can safely ignore this
                    email.
                    <br />
                    <br />
                    <b>
                      Thank you
                      <br />
                      SSVGI LIB Team
                    </b>
                  </p>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td
                  style="
                    padding: 18px 24px;
                    background-color: #eee;
                    border-top: 1px solid #d1d1d1;
                    text-align: center;
                  "
                >
                  <p style="margin: 0; font-size: 13px; color: #555">
                    ©
                    <span style="color: #000; font-weight: 600">SSVGI LIB</span>
                    • Library Management App
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
</DOCTYPE>
`;
}

export function generateForgotPasswordEmailTemplate(resetPasswordUrl) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>SSVGI LIB - Reset Password</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="background-color: #ffffff; padding: 20px 0"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              background-color: #f7f7f7;
              border-radius: 10px;
              overflow: hidden;
              border: 1px solid #d1d1d1;
            "
          >
            <!-- HEADER -->
            <tr>
              <td style="padding: 20px 24px">
                <div style="display: flex; align-items: center; gap: 16px">

                  <!-- LOGO (same as verification template) -->
                  <div style="width: 60px; height: 60px">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <radialGradient id="darkGrad" cx="50%" cy="50%" r="70%">
                          <stop offset="0%" stop-color="#e5e5e5" />
                          <stop offset="100%" stop-color="#bfbfbf" />
                        </radialGradient>

                        <filter id="softGlow">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="url(#darkGrad)"
                        stroke="#999"
                        stroke-width="2"
                      />

                      <g transform="translate(20,25)" filter="url(#softGlow)">
                        <path
                          d="M5 5c6-3 14-3 22 0v30c-8-3-16-3-22 0z"
                          fill="#4d4d4d"
                          opacity="0.95"
                        />
                        <path
                          d="M27 5c6-3 14-3 22 0v30c-8-3-16-3-22 0z"
                          fill="#222"
                          opacity="0.95"
                        />
                        <rect
                          x="24.5"
                          y="5"
                          width="5"
                          height="30"
                          fill="#000000"
                          opacity="0.4"
                        />
                      </g>

                      <text
                        x="50"
                        y="88"
                        font-size="10"
                        fill="#333"
                        font-family="Arial"
                        text-anchor="middle"
                        font-weight="700"
                        letter-spacing="0.8"
                      >
                        SSVGI LIB
                      </text>
                    </svg>
                  </div>

                  <div style="line-height: 1">
                    <div
                      style="font-size: 20px; color: #111; font-weight: 700"
                    >
                      SSVGI LIB
                    </div>
                    <div style="font-size: 13px; color: #555">
                      Password Reset Request
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <!-- IMAGE -->
            <tr>
              <td style="text-align: center; padding-top: 10px">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop&sat=-100"
                  alt="Library"
                  width="220"
                  style="
                    display: block;
                    margin: 0 auto 10px;
                    border-radius: 6px;
                    border: 1px solid #d1d1d1;
                  "
                />
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td style="padding: 24px; color: #333; text-align: center">
                <h1 style="margin: 0; font-size: 22px; color: #000">
                  Reset Your Password
                </h1>

                <p
                  style="
                    margin: 10px 0 20px;
                    font-size: 14px;
                    color: #555;
                    line-height: 1.6;
                  "
                >
                  Dear User,<br />
                  You requested to reset your password.<br />
                  Please click the button below to proceed:
                </p>

                <!-- RESET BUTTON -->
                <a
                  href="${resetPasswordUrl}"
                  style="
                    display: inline-block;
                    background-color: #000;
                    color: #fff;
                    padding: 12px 26px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 700;
                    text-decoration: none;
                    margin-bottom: 20px;
                  "
                >
                  Reset Password
                </a>

                <p
                  style="
                    margin: 20px 0 0; 
                    font-size: 13px;
                    color: #666;
                    line-height: 1.5;
                  "
                >
                  If you did not request this, please ignore this email.<br />
                  This link will expire in <strong>10 minutes</strong>.
                  <br /><br />
                  If the button doesn't work, copy and paste this URL:<br />
                  <span style="word-wrap: break-word; color: #000">
                    ${resetPasswordUrl}
                  </span>
                  <br /><br />
                  <b>
                    Thank you <br />
                    SSVGI LIB Team
                  </b>
                </p>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td
                style="
                  padding: 18px 24px;
                  background-color: #eee;
                  border-top: 1px solid #d1d1d1;
                  text-align: center;
                "
              >
                <p style="margin: 0; font-size: 13px; color: #555">
                  © <span style="color: #000; font-weight: 600">SSVGI LIB</span>
                  • Library Management App
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
