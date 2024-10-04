export default function YoutubeVideo() {
  return (
    <div className="flex items-center justify-center w-full p-4 md:p-8 lg:p-12">
      <iframe
        className="w-full sm:max-w-xs md:max-w-md lg:max-w-4xl  rounded-2xl aspect-video"
        src="https://www.youtube.com/embed/S4C_XEi_KPU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
