"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What file formats do you support for 3D assets?",
    answer:
      "CGHeven supports a wide range of industry-standard formats including FBX, OBJ, glTF, USD, and Blender files. All assets are thoroughly tested for compatibility with major 3D software.",
  },
  {
    question: "How can I become a contributor to CGHeven?",
    answer:
      "We're always looking for talented 3D artists and VFX creators! Visit our Contributors page to submit your portfolio and application. We review all submissions and will contact you if there's a good fit.",
  },
  {
    question: "Do you offer custom 3D asset creation services?",
    answer:
      "Yes, we provide custom 3D modeling, texturing, and VFX services for specific project needs. Contact our business team with your requirements for a quote and timeline estimate.",
  },
  {
    question: "What are the licensing terms for assets purchased on CGHeven?",
    answer:
      "We offer various licensing options including Standard, Extended, and Enterprise licenses. Each has different usage rights and restrictions. Check our Licensing page for detailed information on each license type.",
  },
]

export default function FaqSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-300">Quick answers to common questions about CGHeven</p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-colors text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Can't find what you're looking for?{" "}
          <a href="#" className="text-[#00aaff] hover:underline">
            Check our help center
          </a>{" "}
          or contact us directly.
        </p>
      </div>
    </div>
  )
}

