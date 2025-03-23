import ContactForm from "./contact-form/page"
import FaqSection from "./faq-section/page"
import Newsletter from "./newsletter/page"
import SocialLinks from "./social-links/page"
import { Sparkles } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-[Poppins]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500 blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-500 blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header & Introduction */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-teal-500 " />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Get in Touch with <span className="text-teal-500 ">CGHeven</span>
            </h1>
            <Sparkles className="h-6 w-6 text-teal-500 " />
          </div>
          <p className="text-xl text-gray-300 mt-4">
            Have questions, feedback, or business inquiries? Reach out to us!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <ContactForm />

          <div className="space-y-12">
            {/* Social Media & Direct Contact */}
            <SocialLinks />

            {/* 3D Render */}
            <div className="rounded-xl overflow-hidden h-64 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10 flex items-center p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Digital Space</h3>
                  <p className="text-gray-300">Join our virtual community of creators and innovators.</p>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Futuristic 3D workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection />

        {/* CTA Section */}
        <div className="mt-20 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join the CGHeven Community</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-500 text-white font-medium transition-all hover:bg-teal-500/80 hover:shadow-[0_0_15px_rgba(0,170,255,0.5)]"
            >
              Join Our Discord
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-teal-500 bg-teal-500 text-teal-bg-teal-500 font-medium transition-all hover:bg-[#00aaff]/10 hover:shadow-[0_0_15px_rgba(0,170,255,0.3)]"
            >
              Support on Patreon
            </a>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

