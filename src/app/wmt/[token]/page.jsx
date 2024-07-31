import Iframe from "./iframe/iframe";


const WMTPage = ({ params: { token } }) => {

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0  bg-[url('/img/wmtbg.jpg')] bg-cover bg-no-repeat opacity-50"></div>
      <div className="relative z-10">
        <Iframe SiteToken={token}/>
      </div>
    </div>
  );
};

export default WMTPage;
