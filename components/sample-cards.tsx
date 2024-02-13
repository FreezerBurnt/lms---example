import Image from "next/image";

const SampleCards = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap xl:block items-center justify-center gap-4 bg-neutral-200 rounded-lg shadow-2xl p-2">
          <div className="border-2 border-amber-500 rounded-lg p-4 xl:mb-2">
            <div className="flex flex-row items-center justify-center mb-2">
              <h2 className="text-sm md:text-lg bg-amber-200 p-3 rounded-lg text-amber-700 ">
                Student mode
              </h2>
            </div>
            <div className="flex flex-wrap md:flex-col lg:flex-row items-center justify-center gap-4">
              <Image
                src={"/Courses-list.jpg"}
                alt="Courses"
                width={300}
                height={300}
              />
              <Image
                src={"/Courses-list-2.jpg"}
                alt="Courses"
                width={300}
                height={300}
              />
              <Image
                src={"/Courses-list-3.jpg"}
                alt="Courses"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="border-2 border-blue-500 rounded-lg p-4">
            <div className="flex flex-row items-center justify-center mb-2">
              <h2 className="text-sm md:text-lg bg-blue-200 p-3 rounded-lg text-sky-700">
                Teacher mode
              </h2>
            </div>
            <div className="flex flex-wrap md:flex-col lg:flex-row items-center justify-center gap-4">
              <Image
                src={"/teacher-1.jpg"}
                alt="Courses"
                width={300}
                height={300}
              />
              <Image
                src={"/teacher-2.jpg"}
                alt="Courses"
                width={300}
                height={300}
              />
              <Image
                src={"/teacher-3.jpg"}
                alt="Courses"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCards;
