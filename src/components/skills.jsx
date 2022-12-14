export default function Skills() {
  return (
    <div
      id="skills"
      className="w-[80%] lg:h-[100vh] m-auto text-white text-[24px] mt-[80px] lg:mt-[0]"
    >
      <h2 className="text-[#5ff3d1] text-[30px] sm:text-[44px] mb-[0] md:mb-[10px]">
        \\ &nbsp;Skills
      </h2>
      <div className="flex flex-col w-[100%] mt-[50px]">
        <div class="block p-6 rounded-lg shadow-lg bg-white border-4 border-[#5ff3d1]">
          <h5 class="text-black text-xl leading-tight font-medium mb-2">
            What keeps me going?
          </h5>
          <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light text-gray-600">
            <li>learning, Nothing is impossible</li>
            <li>Failures are inevitable</li>
            <li>listen keenly to smarter people opinions</li>
            <li>learn from mistakes</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-[50px]">
          <div class="block p-6 rounded-lg shadow-lg bg-white w-full md:w-[30%] border-4 border-[#5ff3d1]">
            <h5 class="text-black text-xl leading-tight font-medium mb-2">
              Proficient Programming Languages
            </h5>
            <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light text-gray-600">
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div class="block p-6 rounded-lg shadow-lg bg-white w-full md:w-[30%] border-4 border-[#5ff3d1] my-[50px] md:my-[0px]">
            <h5 class="text-black text-xl leading-tight font-medium mb-2">
              Frameworks and libraries
            </h5>
            <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light text-gray-600">
              <li>ReactJs</li>
              <li>Node Js</li>
              <li>Tailwind CSS</li>
              <li>Flask</li>
            </ul>
          </div>
          <div class="block p-6 rounded-lg shadow-lg bg-white w-full md:w-[30%] border-4 border-[#5ff3d1]">
            <h5 class="text-black text-xl leading-tight font-medium mb-2">
              Databases, Tools and Platform
            </h5>
            <ul className="flex flex-col list-disc pl-[35px] text-[18px] font-light text-gray-600">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>Netlify</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
