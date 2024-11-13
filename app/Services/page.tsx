import SectionHeading from "../Helper/SectionHeading"
import { servicesData } from "@/Data/data"
import ServiceCard from "./ServiceCard"



const Services = () => {
  return (
    <div className="pt-32 pb-16 bg-[#0f0715] ">
        <SectionHeading>Services</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10
        w-[80%] mx-auto items-center mt-20">
            {
                servicesData.map((services)=>{
                    return <div key={services.id}>
                        {/* Service Card */}
                        <ServiceCard service={services}/>

                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Services