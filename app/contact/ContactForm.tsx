"use client";


const ContactForm = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b1f01c03-faa4-4961-ab2f-5563b2bd763d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(alert("Message submitted✔😊"));
      window.location.reload();
    }
  }

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] py-3 font-bold">
        Let&apos;s Work together
      </h1>
      <p className="text-gray-200 mt-3 text-xs md:text-sm lg:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ea
        neque natus soluta sequi hic optio tenetur quo alias beatae dolorem
        similique
      </p>
      {/* Form  */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full block overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <input
            name="name"
            type="text"
            required
            placeholder="First name"
            className="flex-1 text-[17px] bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="last-name"
            placeholder="Last name"
            className="flex-1 text-[17px] bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mt-5">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="flex-1 text-[17px] bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="number"
            name="number"
            placeholder="phone"
            className="flex-1 text-[17px] bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select
            name="select"
            className="bg-black mt-5 text-[17px] text-white placeholder:text-gray-600 px-6 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option className="text-white" value="FrontEnd">
              FrontEnd Development
            </option>
            <option className="text-white" value="BackeEnd">
              BackeEnd Development
            </option>
            <option className="text-white" value="FullStack">
              FullStack Development
            </option>
          </select>
        </div>
        <textarea
          name="message"
          rows={7}
          placeholder="message"
          className="bg-black mt-5 text-[17px] text-white placeholder:text-gray-600 px-6 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            className=" bg-orange-700 text-[19px]  px-5 py-2 text-white hover:bg-orange-900 transition-all duration-200 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
