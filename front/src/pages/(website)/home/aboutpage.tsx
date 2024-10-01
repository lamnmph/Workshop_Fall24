import { FaBook, FaRoad } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";

const Aboutpage = () => {
  return (
    <>
      <div className="container mx-auto p-20">
        <img
          src="https://s3-alpha-sig.figma.com/img/9c2f/5c30/d4db4723a6061e62a81d915b0c00bed9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NodqKY4zRTG0frk-Cc3oLIKV7pOblHDv4hpnapTblg5Qhd1gDHS5Vt5l51XFoO7ItHAc~1F3qxdhgbeTb7g1Azd3BpUblPsbFv3H7Z0nQ9xXTf130ZJUEEVWNFvMIB34MtDL~JgcRMOch3f5eKS2VUYzABAeX0D5rCEFJRXFeYN926pwAi3ADUVtHDFbngqkkilnE~upONmzF-5wGzU661RhjylxV-5XucT8j4i8DM65inhgKP~vk4RTvnwhviIUoso05lOb2afNdwj3sYGQXc7FgIhdf3v7P8IfmF0jpEkzPY1xQgMvWGI2y01MrN3Q5OvVg8oDCS8fCSBFhTFRLQ__"
          alt=""
          className="w-full"
          style={{ border: "2px soid #ddd", borderRadius: "6px", height: "6" }}
        />
        <br />
        <br />
        <div className="flex flex-row pl-30">
          <div className="basis-1/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex justify-center text-6xl">
                  <PiTarget />
                </div>
                <p className="font-bold text-3xl text-center">OUR MISSION</p>
                <p className="text-center mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex justify-center text-6xl">
                  <FaRoad />
                </div>
                <p className="font-bold text-3xl text-center">OUR VISION</p>
                <p className="text-center mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex justify-center text-6xl">
                  <FaBook />
                </div>
                <p className="font-bold text-3xl text-center">OUR VALUES</p>
                <p className="text-center mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex">
          <img
            src="https://s3-alpha-sig.figma.com/img/a11d/53fa/0dce339971752eb7827b7d2070e33201?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqX0Y26Qdsz4toDHREdzgcLL7SBGavm~S0BBMvbBgDQLEsk5InSS878x~z48By-RWGIE4uQTcB02lf2KtDmt-KdZ2TXRxQT643SjBVtB2Tl6SwDhmowFPop4fD9d~LHM1rWiS-0LaKQDFRrsugc0sdbrO6G~ynmO-fn5fAFaoHftF1gBGP2E4YngGmnGMMhZRtWKynG9jlQqyuX5-5JiJXD5thnOA56FoLQifaU760Tbvc2Y3vZW4ZYI6nRH3ECW4N2QOLOm9X3keTJyF60ZqegIPA-dtiLrxuQBuuJcmkd0ocBmefR8Vv-aqKoomjCOU9ZUxKhDez--s1MGGDHGrQ__"
            width={624}
            height={408}
          ></img>
          <div className="flex flex-col ml-10 mt-20">
            <p className="font-bold text-3xl">ABOUT FURNIO COMPANY</p>
            <p className="text-base mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-base mt-5">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-3xl font-bold">WE CREATE NATURAL WOOD FURNITURE</p>
          <p className="text-3xl font-bold">AS WELL AS HIGH-QUALITY</p>
        </div>
        <div className="flex justify-center ">
          <div className="mr-4 mt-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/a11d/53fa/0dce339971752eb7827b7d2070e33201?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqX0Y26Qdsz4toDHREdzgcLL7SBGavm~S0BBMvbBgDQLEsk5InSS878x~z48By-RWGIE4uQTcB02lf2KtDmt-KdZ2TXRxQT643SjBVtB2Tl6SwDhmowFPop4fD9d~LHM1rWiS-0LaKQDFRrsugc0sdbrO6G~ynmO-fn5fAFaoHftF1gBGP2E4YngGmnGMMhZRtWKynG9jlQqyuX5-5JiJXD5thnOA56FoLQifaU760Tbvc2Y3vZW4ZYI6nRH3ECW4N2QOLOm9X3keTJyF60ZqegIPA-dtiLrxuQBuuJcmkd0ocBmefR8Vv-aqKoomjCOU9ZUxKhDez--s1MGGDHGrQ__"
              height={300}
              width={300}
            />
          </div>
          <div className="mr-4 mt-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/a11d/53fa/0dce339971752eb7827b7d2070e33201?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqX0Y26Qdsz4toDHREdzgcLL7SBGavm~S0BBMvbBgDQLEsk5InSS878x~z48By-RWGIE4uQTcB02lf2KtDmt-KdZ2TXRxQT643SjBVtB2Tl6SwDhmowFPop4fD9d~LHM1rWiS-0LaKQDFRrsugc0sdbrO6G~ynmO-fn5fAFaoHftF1gBGP2E4YngGmnGMMhZRtWKynG9jlQqyuX5-5JiJXD5thnOA56FoLQifaU760Tbvc2Y3vZW4ZYI6nRH3ECW4N2QOLOm9X3keTJyF60ZqegIPA-dtiLrxuQBuuJcmkd0ocBmefR8Vv-aqKoomjCOU9ZUxKhDez--s1MGGDHGrQ__"
              height={300}
              width={300}
            />
          </div>
          <div className="mr-4 mt-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/a11d/53fa/0dce339971752eb7827b7d2070e33201?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqX0Y26Qdsz4toDHREdzgcLL7SBGavm~S0BBMvbBgDQLEsk5InSS878x~z48By-RWGIE4uQTcB02lf2KtDmt-KdZ2TXRxQT643SjBVtB2Tl6SwDhmowFPop4fD9d~LHM1rWiS-0LaKQDFRrsugc0sdbrO6G~ynmO-fn5fAFaoHftF1gBGP2E4YngGmnGMMhZRtWKynG9jlQqyuX5-5JiJXD5thnOA56FoLQifaU760Tbvc2Y3vZW4ZYI6nRH3ECW4N2QOLOm9X3keTJyF60ZqegIPA-dtiLrxuQBuuJcmkd0ocBmefR8Vv-aqKoomjCOU9ZUxKhDez--s1MGGDHGrQ__"
              height={300}
              width={300}
            />
          </div>
          <div className="mr-4 mt-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/a11d/53fa/0dce339971752eb7827b7d2070e33201?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqX0Y26Qdsz4toDHREdzgcLL7SBGavm~S0BBMvbBgDQLEsk5InSS878x~z48By-RWGIE4uQTcB02lf2KtDmt-KdZ2TXRxQT643SjBVtB2Tl6SwDhmowFPop4fD9d~LHM1rWiS-0LaKQDFRrsugc0sdbrO6G~ynmO-fn5fAFaoHftF1gBGP2E4YngGmnGMMhZRtWKynG9jlQqyuX5-5JiJXD5thnOA56FoLQifaU760Tbvc2Y3vZW4ZYI6nRH3ECW4N2QOLOm9X3keTJyF60ZqegIPA-dtiLrxuQBuuJcmkd0ocBmefR8Vv-aqKoomjCOU9ZUxKhDez--s1MGGDHGrQ__"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutpage;
