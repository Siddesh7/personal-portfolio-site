import Image from "../assets/image.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="w-[80%] xl:h-[100vh] m-auto text-white text-[24px]"
    >
      <h2 className="text-[#5ff3d1] text-[30px] sm:text-[44px] mb-[0] md:mb-[10px]">
        \\ &nbsp;About Me
      </h2>
      <div className="flex flex-col md:flex-row pt-[20px]">
        <div className="w-full md:w-[30%] pt-[20px] hover:scale-105 transition duration-300 ease-in-out flex md:block justify-center">
          <img
            src={Image}
            className="w-[300px] border-4 border-[#5ff3d1] rounded-xl"
            alt="hero"
          />
        </div>
        <div className="w-full md:w-[70%] pt-[30px] md:pt-[15px] md:pl-[20px]">
          <p className="text-[18px] md:text-[22px] lg:text-[24px] font-['Lato'] font-medium">
            My name is Siddesh and I love exploring cool tech, trying to play
            with it and create useful stuff. I started into Programming only
            when I found out it can ease my life. So I used to write scripts to
            literally to every work I would have to do for hours either. And I
            started freelancing Web development and that's when I got introduced
            into Crypto. Since then I got fascinated with the web3 tech so
            started to learn how to take part in the tech.
            <br></br>
            <br></br>I have contributed to various web3 projects in terms of
            content creation and also in touch with great people in the web3
            space. I basically write code and also love doing web3 events.
            <br></br>
            <br></br>
            Code + web3 vibes + Networking = Siddesh (wagmi)
          </p>
        </div>
      </div>
    </div>
  );
}
