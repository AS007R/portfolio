import ButtonSwipe from "@/components/ButtonSwipe";
import AboutBox from "@/components/aboutBox";
import { IoCloudDownload } from "react-icons/io5";

function PersonalInfo() {
  return (
    <>
      <section className="flex lg:flex-row gap-2 flex-col lg:h-96 w-full">
        <div className="left lg:w-1/2">
          <div className="l">
            <h3 className=" scroll-m-20 text-2xl font-semibold tracking-tight">
              PERSONAL INFORMATION
            </h3>
            <div className="flex my-6 justify-between lg:max-w-[90%]">
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Fistr Name: <span className="text-white font-bold">Asad</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Last Name:{" "}
                  <span className="text-white font-bold">Subhani</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Age: <span className="text-white font-bold">25 years</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Nstionality:{" "}
                  <span className="text-white font-bold">Pakistan</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Work status:{" "}
                  <span className="text-white font-bold">Open to work</span>
                </p>
              </div>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Address: <span className="text-white font-bold">Lahore</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Phone:{" "}
                  <span className="text-white font-bold">+92 3435701060</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Email:{" "}
                  <span className="text-white font-bold">asad@asaddev.com</span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  GitHub:{" "}
                  <span className="text-white font-bold">
                    https://github.com/AS007R
                  </span>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-gray-300">
                  Languages:{" "}
                  <span className="text-white font-bold">Urdu, English</span>
                </p>
              </div>
            </div>

            <ButtonSwipe text="DOWNLOAD CV">
              <IoCloudDownload size={25} />
            </ButtonSwipe>
          </div>
          <div className="r"></div>
        </div>
        <div className="right lg:w-1/2 grid grid-cols-2 gap-4">
          <AboutBox text="YEARS OF EXPERIENCE" number={1} />
          <AboutBox text="PROJECTS COMPLETED " number={8} />
          <AboutBox text="HAPPY CUSTOMERS" number={6} />
          <AboutBox text="CERITIFICATIONS" number={4} />
        </div>
      </section>
      <hr className="border-1 dark:bg-gray-700 w-[50vw] mt-10 m-auto" />
    </>
  );
}

export default PersonalInfo;