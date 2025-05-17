import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Sezione Titolo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LA NOSTRA STORIA</h1>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </motion.div>

        {/* Grid Contenuto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonna Immagine */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="/images/about-factory.jpg" 
              alt="La nostra fabbrica" 
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Colonna Testo */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">DAL 1985, ECCELLENZA NELLE PIASTRELLE</h2>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                Lastra Ceramica nasce dalla passione per <strong>materiali di qualità</strong> e 
                dall'esperienza decennale nel settore delle ceramiche.
              </p>
              <p>
                La nostra filosofia si basa su tre principi fondamentali: 
                <span className="block mt-2 ml-4">
                  • <strong>Qualità</strong> senza compromessi<br/>
                  • <strong>Prezzi</strong> diretti dalla fabbrica<br/>
                  • <strong>Disponibilità</strong> immediata a stock
                </span>
              </p>
              <p>
                Oggi distribuiamo in tutta Italia, offrendo <strong>oltre 200 varietà</strong> di piastrelle 
                per interni ed esterni, con un team di esperti sempre a tua disposizione.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                to="/contatti" 
                className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Contatta i nostri esperti
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Sezione Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">IL NOSTRO TEAM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Rossi",
                role: "Fondatore & CEO",
                bio: "40 anni di esperienza nel settore ceramico",
                img: "/images/team/marco.jpg"
              },
              {
                name: "Laura Bianchi",
                role: "Responsabile Vendite",
                bio: "Specializzata in soluzioni su misura",
                img: "/images/team/laura.jpg"
              },
              {
                name: "Andrea Verdi",
                role: "Logistica",
                bio: "Garanzia di consegne puntuali",
                img: "/images/team/andrea.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sezione Valori */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gray-50 p-12 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">I NOSTRI VALORI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏭",
                title: "Produzione Diretta",
                description: "Niente intermediari, prezzi da fabbrica"
              },
              {
                icon: "🛡️",
                title: "Garanzia 20 Anni",
                description: "Sulle nostre piastrelle premium"
              },
              {
                icon: "🚚",
                title: "Consegna Rapida",
                description: "Disponibilità immediata da stock"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}