import loading from "../assets/images/images/loading.gif";
const Loading = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <img src={loading} alt="Loading..." className="h-[3rem]"/>
    </div>
  );
};

export default Loading;
