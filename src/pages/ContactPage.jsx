import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulazione invio form (sostituisci con la tua API)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Dati inviati:', data);
    setIsSubmitting(false);
    setSubmitMessage({ 
      type: 'success', 
      text: 'Grazie per il tuo messaggio! Ti risponderemo entro 24 ore.' 
    });
    reset();
    setTimeout(() => setSubmitMessage(null), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Sezione Titolo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTATTACI</h1>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Hai domande o bisogno di un preventivo? Compila il form o contattaci direttamente.
          </p>
        </motion.div>

        {/* Grid Contenuto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonna Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                {submitMessage.text}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Campo obbligatorio' })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Campo obbligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email non valida'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.email && (
                    <motion.p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefono
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Oggetto *
                </label>
                <select
                  id="subject"
                  {...register('subject', { required: 'Campo obbligatorio' })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black`}
                >
                  <option value="">Seleziona un oggetto</option>
                  <option value="preventivo">Richiesta preventivo</option>
                  <option value="informazioni">Informazioni prodotti</option>
                  <option value="ordine">Stato ordine</option>
                  <option value="altro">Altro</option>
                </select>
                {errors.subject && (
                  <motion.p className="mt-1 text-sm text-red-600">
                    {errors.subject.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Campo obbligatorio' })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black`}
                />
                {errors.message && (
                  <motion.p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 bg-black text-white font-medium rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Invio in corso...
                  </span>
                ) : 'INVIA MESSAGGIO'}
              </motion.button>
            </form>
          </motion.div>

          {/* Colonna Info Contatto */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mappa */}
            <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132468!2d-73.987844924017!3d40.7484409713898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMDkuNyJX!5e0!3m2!1sen!2sus!4v1623861234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mappa ubicazione"
              ></iframe>
            </div>

            {/* Info Contatto */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">INFORMAZIONI DI CONTATTO</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-black p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Sede Legale</h3>
                    <p className="text-gray-600 mt-1">Via delle Piastrelle, 123<br />00100 Roma (RM)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-black p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Telefono</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+390612345678" className="hover:text-black transition-colors">+39 06 12345678</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-black p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@lastraceramica.it" className="hover:text-black transition-colors">info@lastraceramica.it</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-black p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Orari di Apertura</h3>
                    <p className="text-gray-600 mt-1">
                      Lun-Ven: 8:30 - 18:30<br />
                      Sabato: 9:00 - 13:00<br />
                      Domenica: Chiuso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}