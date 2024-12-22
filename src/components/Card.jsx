import React, { useEffect, useState } from "react";
// import background from "../img/background.jpg"
// import { CiLocationOn } from "react-icons/ci";


let initialUser = {
  firstName: "",
  lastName: "",
  profileUrl: "",
  address: "",
  gender: "",
  cell: ""
}


const Card = () => {
  const [user, setUser] = useState(initialUser);

  // console.log("firstName", user.name.first);

  useEffect(() => {
    // Fetch user data from the API
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // setUser(data.results[0]); // Save the user data in state
          let user = data.results[0];
          console.log(user);
          // console.log(data.results[0]);
          let newUser = {
            firstName: user.name.first,
            lastName: user.name.last,
            profileUrl: user.picture.large,
            address: `${user.location.city}, ${user.location.state}`,
            gender: user.gender,
            cell: user.phone,
          }
          console.log(newUser);
          setUser(newUser);
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);




  return (
    <main className="profile-page">
      {/* Hero Section */}
      <section className="relative block h-[500px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      {/* Profile Content */}
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="Profile"
                      src={user.profileUrl}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">

                    </div>
                    <div className="mr-4 p-3 text-center">

                    </div>
                    <div className="lg:mr-4 p-3 text-center">

                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12 mb-10">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-600 mb-2">
                  {user.firstName} {user.lastName}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  {user.address}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  Gender: {user.gender}
                </div>
                <div className="mb-2 text-blueGray-600">
                  Phone: {user.cell}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Card;
