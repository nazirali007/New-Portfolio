import SteperVertical from "./SteperVertical";
import SkillSection from "./SkillSection";
import CardSection from "./CardSection";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <title>Nazir- Portfolio</title>
      <meta name="description" content="Welcome to my portfolio homepage." />
      <meta name="keywords" content="Next.js, React, SEO, Meta Tags" />
      <meta name="author" content="Nazir Ali Siddiqui" />

      <main>
        <TopNavbar />
        <div className="flex min-h-screen flex-col items-center justify-center p-5 md:p-20 bg-black text-white">
          <div
            className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row flex-col flex"
            style={{
              borderBottom: "1px solid grey",
              paddingBottom: "2rem",
            }}
          >
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold">Hello There,</h1>
              <h1 className="text-3xl font-bold">
                I&apos;m Nazir Ali Siddiqui
              </h1>
              <h1 className="text-3xl font-bold" style={{ color: "#64d2de" }}>
                ReactJs Developer
              </h1>
              <div className="flex justify-start space-x-12 py-5">
                <a
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                    alt="React"
                    className="h-14 w-15"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nazir-ali-siddiqui-385a3a174"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6fUSMz02fx9fBPa167aHenKgxs3qUXy_Kw&s"
                    alt="LinkedIn"
                    className="h-14 w-14"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </a>
                <a
                  href="https://github.com/nazirali007?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className="h-14 w-14"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div>
                <img
                  src="images/nazirProfile.jpg"
                  alt="ProfileImages"
                  style={{
                    height: "20rem",
                    width: "20rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h1 className="text-xl font-bold pt-5">
                Email: itsnazirali1010@gmail.com
              </h1>
              <h1 className="text-xl font-bold">Phone: +917007297120</h1>
            </div>
          </div>
          <div
            className="z-10 w-full max-w-5xl font-mono text-sm lg:flex pt- "
            style={{ borderBottom: "1px solid grey", paddingBottom: "2rem" }}
          >
            <div style={{ width: "100%", marginTop: "1rem" }}>
              <h1 className="text-3xl font-bold">Experience</h1>
              <SteperVertical />
            </div>
          </div>
          <div
            className="z-10 w-full max-w-5xl font-mono text-sm lg:flex "
            style={{
              borderBottom: "1px solid grey",
              paddingBottom: "2rem",
              paddingTop: "1rem",
            }}
          >
            <div>
              <h1 className="text-3xl font-bold">Skills</h1>

              <div style={{ paddingTop: "2rem" }}>
                <SkillSection />
              </div>
            </div>
          </div>
          <div
            className="z-10 w-full max-w-5xl font-mono text-sm lg:flex pb-5 "
            style={{
              borderBottom: "1px solid grey",
              paddingBottom: "2rem",
              paddingTop: "1rem",
            }}
          >
            <div style={{ width: "100%" }}>
              <h1 className="text-3xl font-bold pb-3">Projects</h1>
              <CardSection />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
