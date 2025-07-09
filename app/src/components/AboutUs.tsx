import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row min-h-[624px]">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full h-[400px] md:h-auto relative">
        <Image
          src="/about-idea.png"
          alt="Crumpled paper and lightbulb"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Right: Yellow content */}
      <div className="md:w-1/2 w-full bg-[#FFC40C] flex flex-col justify-center px-8 py-12">
        <div className="max-w-xl ml-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 uppercase">SOBRE NÓS</h2>
          <p className="text-white text-sm md:text-base mb-8 leading-relaxed">
            In sit amet mi sollicitudin, maximus risus sed, eleifend turpis. Ut aliquet fermentum leo eu vestibulum. Aliquam vitae iaculis neque. Proin vitae quam ac lectus fermentum viverra. Vestibulum eu sem lobortis, rhoncus purus in, mattis augue. Proin nec tempor ipsum. Sed eu libero at arcu dictum rhoncus. Vestibulum at tempus felis. Vestibulum mattis tincidunt eleifend. In sit amet mi sollicitudin, maximus risus sed, eleifend turpis. Ut aliquet fermentum leo eu vestibulum. Aliquam vitae iaculis neque. Proin vitae quam ac lectus fermentum viverra. Vestibulum eu sem lobortis, rhoncus purus in, mattis augue.
          </p>
        {/* Stats */}
        <div className="flex flex-row justify-between items-end gap-6 w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-2">
              <svg className="w-40 h-40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="oklch(55.1% .027 264.364)" strokeWidth="3" fill="none" strokeDasharray="282.74" strokeDashoffset="232.65" strokeLinecap="round" />
                <text x="50" y="56" textAnchor="middle" fill="oklch(55.1% .027 264.364)" fontSize="16">18%</text>
              </svg>
            </div>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wide">Percentual</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-2">
              <svg className="w-40 h-40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="oklch(55.1% .027 264.364)" strokeWidth="3" fill="none" strokeDasharray="282.74" strokeDashoffset="141.37" strokeLinecap="round" />
                <text x="50" y="56" textAnchor="middle" fill="oklch(55.1% .027 264.364)" fontSize="16">12:00</text>
              </svg>
            </div>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wide">Hora</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-2">
              <svg className="w-40 h-40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="oklch(55.1% .027 264.364)" strokeWidth="3" fill="none" strokeDasharray="282.74" strokeDashoffset="70.68" strokeLinecap="round" />
                <text x="50" y="56" textAnchor="middle" fill="oklch(55.1% .027 264.364)" fontSize="16">R$350</text>
              </svg>
            </div>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wide">Valor</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
} 