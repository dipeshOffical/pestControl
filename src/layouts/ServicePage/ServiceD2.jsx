import whyChoose2 from '../../assets/whyChoose2.png'


function ServiceD2() {
    const pestControlServices = [
        { title: "Termite Treatment" },
        { title: "Cockroach Control" },
        { title: "Bedbug Treatment" },
        { title: "Spider Control" },
        { title: "Rodent/Mice Control" },
        { title: "General Pest Management" }
    ];

    return (
        <section className={" bg-[#F2F5F8]  p-8 md:p-16 lg:flex flex-row-reverse gap-6 lg:items-center lg:space-x-8"}>
            {/* Text Content */}
            <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900">Pest Control</h2>
                <p className="text-red-500 font-semibold mt-2">Safe, Effective, and Eco-Friendly Solutions</p>
                <p className="text-gray-600 mt-4">
                Opal Pest Control Services offers tailored solutions for a variety of pest problems, ensuring the safety and comfort of your space.</p>

                <h3 className="font-bold text-lg mt-8">Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">


                {pestControlServices.map((s, i) => (
                        <div className="flex items-center space-x-2" key={i}>
                            <span className="text-red-500">✔</span>
                            <div>{s.title}</div>
                        </div>))
                    }
                </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/3 mt-8 lg:mt-0 ">
                <img
                    src={whyChoose2}
                    alt="Pest Control Professional"
                    className="rounded-lg mx-auto"
                />
            </div>
        </section>
    )
}

export default ServiceD2