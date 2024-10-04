
import DoneIcon from '@mui/icons-material/Done';
export default function MasterClassSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold font-sans mb-2 md:mb-4">
          IS THIS MASTER CLASS RIGHT FOR
        </h2>
        <h1 className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-6 md:mb-8 font-sans">
          YOU AND YOUR BUSINESS?
        </h1>
        <div className="p-6 md:p-8 rounded-lg shadow-2xl text-left md:w-3/4 mx-auto bg-gray-50">
          <h3 className="text-xl md:text-2xl font-sans font-bold mb-8  text-center">
            YES! THIS CHALLENGE IS FOR YOU, ESPECIALLY IF...
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            <div className="md:w-1/2 mb-6 md:mb-0 border-2 p-8 m-4">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-2xl"><DoneIcon/></span>
                  <p className="text-sm font-sans">
                    <b>You are tired of building funnel after</b> funnel and not seeing the
                    desired results
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-2xl"><DoneIcon/></span>
                  <p className="text-sm font-sans">
                   <b> Your copywriting is not converting </b>as you had hoped
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-2xl"><DoneIcon/></span>
                  <p className="text-sm font-sans">
                    <b>You want to create an irresistible </b>offer that converts every time
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-2xl"><DoneIcon/></span>
                  <p className="text-sm font-sans">
                    <b>You aim to attract new clients </b>effortlessly and be seen as an authority
                    in your field
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-vcHvKXEfBPRectangle_10.jpg?v=1716435193"
                alt="Masterclass Participants"
                className="rounded-lg shadow-xl w-10/12 transition ease-in duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
