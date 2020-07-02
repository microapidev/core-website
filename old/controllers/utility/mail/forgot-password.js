const forgotPasswordTemplate = (email, url) => {
  const html = `
        <html>
        <head>
            </head>

            <body style="font-family: Arial; font-size: 12px;">
            <div>
                <p>
                    Hi, ${email}
                </p>
                <p>
                    You have requested a password reset, please follow the link below to reset your password.
                </p>
                <p>
                    Please ignore this email if you did not request a password change.
                </p>

                <p>
                    <a href="${url}">
                        Follow this link to reset your password.
                    </a>
                    <div><b> © MicroApi 2020 </b> </div>
                </p>
            </div>
            </body>
        </html>`;
  return html;
};

module.exports = forgotPasswordTemplate;
