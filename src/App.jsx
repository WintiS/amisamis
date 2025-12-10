import React from 'react'

function App() {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col bg-gradient-to-br from-construction-dark via-gray-800 to-construction-dark">
      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        
        {/* Company Name / Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-construction-yellow mb-2 tracking-wide">
            amis amis
          </h1>
          <div className="h-1 w-32 bg-construction-orange mx-auto mt-4"></div>
        </div>

        {/* Under Construction Message */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-1">
            Web je nyní ve výstavbě
          </h2>
          
        </div>

        {/* Image */}
        <div className="mb-6 md:mb-12 w-full max-w-xs md:max-w-2xl mx-auto">
          <div className="rounded-lg shadow-2xl overflow-hidden border-2 border-construction-orange">
            <img 
              src="/images/buidling.jpg" 
              alt="Stavba" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-2xl bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-construction-yellow/30">
          <h3 className="text-xl font-bold text-construction-yellow mb-3 text-center">
            Kontakt
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-construction-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-400 text-xs">Email</p>
                <p className="text-white font-medium text-sm">info@amisamis.cz</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-construction-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-400 text-xs">Telefon</p>
                <p className="text-white font-medium text-sm">+420 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-construction-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-400 text-xs">Adresa</p>
                <p className="text-white font-medium text-sm">Praha, Česká republika</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-4 text-center border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} amis amis. Všechna práva vyhrazena.
        </p>
      </div>
    </div>
  )
}

export default App

