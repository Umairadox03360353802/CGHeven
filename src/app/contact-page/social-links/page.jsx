import { Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {[
          { icon: <Youtube className="h-5 w-5" />, name: "YouTube", url: "#" },
          { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "#" },
          { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
          { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all group"
          >
            <span className="text-gray-400 group-hover:text-[#00aaff] transition-colors">{social.icon}</span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-6">
        <h3 className="text-lg font-medium mb-3">Direct Contact</h3>
        <a href="mailto:contact@cgheven.com" className="flex items-center gap-2 text-teal-500 hover:underline">
          <Mail className="h-4 w-4" />
          contact@cgheven.com
        </a>
      </div>
    </div>
  )
}

