export function Pattern({ color }) {
    return (
      <div className="absolute -top-[100px] sm:-top-[180px] md:-top-[290px] z-999 left-0 right-0 w-full h-[150px] sm:h-[250px] md:h-[400px] overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ width: '100%', height: '100%', minWidth: '100%' }}>
          <path
            fill={color}
            fillOpacity="1"
            d="M0,96L80,90.7C160,85,320,75,480,101.3C640,128,800,192,960,218.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  } 