import './globals.css';

export const metadata = {
  title: 'Ajay Kumar - MERN Stack Developer',
  description: 'Ajay Kumar - MERN Stack Developer. Personal portfolio website.',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'portfolio-id': 'ATSignaturePortfolio2025',
  },
  openGraph: {
    title: 'Ajay Kumar - MERN Stack Developer.',
    url: 'https://github.com/AjayKumar0770',
    images: '/images/facebook_image.png',
    siteName: 'Ajay Kumar - MERN Stack Developer.',
    description: 'Passionate MERN stack developer supporting databases, servers, system engineering and clients. Programmer with a drive to learn and master new technologies.',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  minimumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-265680-29"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-265680-29');
            `,
          }}
        />
      </head>
      <body>
        <div id="contactMe" dangerouslySetInnerHTML={{
          __html: `
            <p>I hope you enjoyed this little journey through my life and career.</p>
            <p>
              If you have any questions or just want to connect, feel free to
              <a
                href="#"
                onclick="window.location.href='mailto:' + atob('YWpheWt1bWFyMDdha2FrQGdtYWlsLmNvbQ=='); return false;"
                >email me</a
              >
              or reach out on
              <a
                href="https://www.linkedin.com/in/ajay-kumar-07ak/"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn</a
              >.
            </p>
            <p>
              Thanks for stopping by—and until next time, may your ideas be bright and
              your bugs be few!
            </p>
          `
        }} />
        <div id="sourceCode" dangerouslySetInnerHTML={{
          __html: `
            <p>
              The website’s source code is
              <a
                href="https://github.com/AjayKumar0770"
                target="_blank"
                rel="noopener noreferrer"
                >available on GitHub</a
              >
              for you to review and experiment with.
            </p>
            <p>
              Please make sure to respect the licence terms outlined in the
              repository.
            </p>
          `
        }} />
        
        {children}

        <div className="visually-hidden">
          <div>
            <h1>Ajay Kumar</h1>
            <p>MERN-Stack Developer</p>
          </div>

          <div>
            <h2>Summary</h2>
            <p>
              My name is Ajay Kumar, and I'm a MERN stack developer. My journey has taken me
              through full-lifecycle full-stack engineering, specializing in databases, servers,
              and user experiences. I'm a passionate programmer with a strong drive to learn
              and master new technologies.
            </p>
          </div>

          <div>
            <h2>Professional Experience</h2>
            <p>
              I performed full-stack engineering within the MERN ecosystem at Labmentix as a
              Full Stack Developer Intern, utilizing TypeScript and MongoDB to bridge UI/UX concepts
              with scalable backend logic. I also worked at CodeAlpha as a Frontend Developer Intern,
              building a modular React component library using TypeScript and Tailwind CSS to optimize
              state management and responsiveness.
            </p>
          </div>

          <div>
            <h2>Education & Projects</h2>
            <p>
              I am pursuing a B.E. in Computer Science and Engineering (Honors in Data Science) at
              RMK College of Engineering and Technology (2023-2027) with a CGPA of 8.14. My projects include
              an AI-Powered Spam Detection System, a Professional Document E-Sign Platform, and an
              Intelligent Student-Centric Guidance System.
            </p>
          </div>

          <div>
            <p>
              I'm always active in hackathons and competitions, and even secured 2nd place in a project
              presentation at R.M.D Engineering College. I believe in writing meticulously clean, fully functional
              code across multiple platforms.
            </p>
          </div>

          <div>
            <h2>A Message of Gratitude</h2>
            <p>
              Thank you for being part of this journey. I hope you find something here that inspires you too.
            </p>
          </div>

          <div>
            <p>
              The path isn't always clear. Sometimes, it feels like climbing in the dark, guided only by the faint glow of what you hope to become.
            </p>
            <p>
              But every step teaches you something. Every stumble shapes your stride. And one day, you look back and realize—you've built your own mountain.
            </p>
            <p>
              <strong>Keep climbing. The view is worth it.</strong>
            </p>
          </div>

          <div>
            <h2>Wisdom from Experience</h2>
            <p>
              I believe that great developers are not just the ones who write the most code, but the ones who collaborate, learn constantly, and help others grow.
            </p>
          </div>
        </div>

        <div style={{ display: 'none' }} data-tracking="ATSignaturePortfolio2025"></div>
      </body>
    </html>
  );
}
