export default function Timeline() {
  return (
    <div id="timeline" className="mt-[60px] lg:mt-[0]">
      <h2 className="w-[80%] m-auto text-[#5ff3d1] text-[30px] sm:text-[44px] mb-[0] md:mb-[10px]">
        \\ &nbsp;Timeline
      </h2>
      <ul class="timeline">
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">
                <a
                  href="https://github.com/Siddesh7/PayDay"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Building Superfluid SuperApp
                </a>
              </span>
              <span class="time-wrapper">
                <span class="time">Now</span>
              </span>
            </div>
            <div class="desc">
              Learning to write smart contracts and to use Superfluid Streams.{" "}
            </div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">
                {" "}
                <a
                  href="https://github.com/Siddesh7/eth-split1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Eth-Split - EthOnline
                </a>
              </span>
              <span class="time-wrapper">
                <span class="time">2022-Sep</span>
              </span>
            </div>
            <div class="desc">
              Built a UI for splitting bills on EVM chains and won{" "}
              <span className="text-[#5ff3d1]">$250</span> for best use of
              Covalent API.
            </div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">
                {" "}
                <a
                  href="https://metastart.in/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Joined MetaStart
                </a>
              </span>
              <span class="time-wrapper">
                <span class="time">2022-Aug</span>
              </span>
            </div>
            <div class="desc">
              Joined MetaStart as a Full stack Dev Intern, to learn and apply
              full stack development and team work.
            </div>
          </div>
        </li>
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag ">
                {" "}
                <a
                  href="https://mv-mvp.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Movie Finder App
                </a>
              </span>
              <span class="time-wrapper">
                <span class="time">2022-Aug</span>
              </span>
            </div>
            <div class="desc">
              Built a mini app with auto-completion on search with movies watch
              providers.
            </div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">High ticket Service</span>
              <span class="time-wrapper">
                <span class="time">2022-July</span>
              </span>
            </div>
            <div class="desc">
              Successfully shipped a high ticket freelance web project.
            </div>
          </div>
        </li>
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">
                {" "}
                <a href="https://soiy.me/" target={"_blank"} rel="noreferrer">
                  Crypto Price Aggregator App
                </a>
              </span>
              <span class="time-wrapper">
                <span class="time">2022-July</span>
              </span>
            </div>
            <div class="desc">
              Built an aggregator app to compare prices of cryptocurrencies
              across major Indian Exchanges.
            </div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Learning & building projects</span>
              <span class="time-wrapper">
                <span class="time">2021-2022</span>
              </span>
            </div>
            <div class="desc">Continous learning and building.</div>
          </div>
        </li>
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">
                {" "}
                <a
                  href="https://websidyn.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Launched a web dev agency
                </a>
              </span>
              <span class="time-wrapper">
                <span class="time">2020-Nov</span>
              </span>
            </div>
            <div class="desc">
              Started web dev agency to provide services to local and global
              businesses.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
