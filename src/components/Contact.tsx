function ContactForm() {
  return (
    <>
      <form></form>
    </>
  );
}

export default function Contact() {
  return (
    <>
      <div className="p-4 my-4 bg-pr-dark-green text-white flex flex-col items-center pt-16">
        <span className=" font-semibold ">- Quick Connect</span>
        <h2 className="text-2xl font-serif py-4 text-center">
          Get in touch with us for any questions & help
        </h2>
        <div className="bg-white h-[3px] w-14"></div>
        <ContactForm />
      </div>
    </>
  );
}
