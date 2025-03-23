import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CuboidIcon as Cube,
  Film,
  Paintbrush,
  CheckCircle,
  Zap,
  Users,
  RefreshCw,
  Layers,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react"

function AboutUs() {
    return (
        <>
               <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      {/* <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Cube className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold">CGHeven</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#mission" className="hover:text-purple-400 transition-colors">
            Mission
          </Link>
          <Link href="#features" className="hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
      </header> */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Ultimate Hub for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              3D Creators
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Empowering game developers, filmmakers, and digital artists with high-quality 3D assets, VFX elements, and
            tools that bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">Explore Assets</Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-purple-500 text-purple-400 hover:bg-purple-950/50"
            >
              Join Community
            </Button>
          </div>
        </div>
        <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
          <img
            src="/main1.png"
            alt="3D Assets Showcase"
            fill
            className="object-contain w-full h-full  object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex gap-4">
            <div className="bg-black/60 backdrop-blur-sm p-2 rounded-lg">
              <Cube className="h-6 w-6 text-purple-400" />
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-2 rounded-lg">
              <Film className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-2 rounded-lg">
              <Paintbrush className="h-6 w-6 text-pink-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Discover Premium Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "3D Models", icon: <Cube className="h-10 w-10" />, color: "bg-purple-500" },
            { title: "VFX Elements", icon: <Film className="h-10 w-10" />, color: "bg-cyan-500" },
            { title: "Digital Tools", icon: <Paintbrush className="h-10 w-10" />, color: "bg-pink-500" },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700 transition-all hover:shadow-lg hover:shadow-purple-500/10 group"
            >
              <div
                className={`${category.color} p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-400">High-quality assets optimized for both real-time and cinematic use.</p>
              <Button
                variant="link"
                className="text-purple-400 p-0 mt-4 group-hover:translate-x-2 transition-transform"
              >
                Explore {category.title} →
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 order-2 md:order-1">
          <img
            src="/main1.png"
            alt="Ammar Khan - Founder of CGHeven"
            fill
            className="object-contain w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex gap-4">
            <Link
              href="#"
              className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-purple-600/80 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-purple-600/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-purple-600/80 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-purple-600/80 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Founder</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-purple-400">Ammar Khan – Visionary Behind CGHeven</h3>
          <p className="text-gray-300">
            The driving force behind CGHeven, Ammar Khan is a 3D artist, VFX creator, and entrepreneur passionate about
            revolutionizing digital asset accessibility. With years of experience in visual effects, 3D animation, and
            digital content creation, he founded CGHeven to bridge the gap between high-quality assets and creators
            worldwide.
          </p>
          <div className="pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700">Learn More About Ammar</Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-slate-900/80 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              At <span className="font-bold">CGHeven</span>, we believe in making{" "}
              <span className="text-purple-400 font-semibold">high-quality 3D assets available to everyone.</span> Our
              goal is to <span className="text-cyan-400 font-semibold">streamline the creative process</span> for
              professionals and enthusiasts alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Top-Tier Assets",
                description: "Optimized for both real-time and cinematic use.",
                icon: <CheckCircle className="h-8 w-8 text-purple-500" />,
              },
              {
                title: "Accessible Resources",
                description: "Free & premium assets for all skill levels.",
                icon: <Zap className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Innovation-Driven",
                description: "Regularly updated models, textures, and effects.",
                icon: <RefreshCw className="h-8 w-8 text-pink-500" />,
              },
              {
                title: "Thriving Community",
                description: "A space for creators to collaborate and push boundaries.",
                icon: <Users className="h-8 w-8 text-green-500" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:translate-y-[-5px] transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose CGHeven?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Premium Quality",
              description: "Every asset is crafted with precision, ensuring maximum performance.",
              icon: <CheckCircle className="h-12 w-12 text-purple-500" />,
            },
            {
              title: "For Artists, By Artists",
              description: "Created with firsthand industry knowledge and expertise.",
              icon: <Paintbrush className="h-12 w-12 text-cyan-500" />,
            },
            {
              title: "Constant Evolution",
              description: "We keep up with trends, updating and expanding our library.",
              icon: <RefreshCw className="h-12 w-12 text-pink-500" />,
            },
            {
              title: "Seamless Integration",
              description: "Assets tailored for use in Blender, Unreal Engine, Unity, Houdini, and more.",
              icon: <Layers className="h-12 w-12 text-green-500" />,
            },
          ].map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Join the CGHeven Revolution</h3>
            <p className="text-lg text-gray-300 mb-8">
              CGHeven is more than just a website—it's a movement for digital creators who want
              <span className="text-purple-400 font-semibold"> access to the best 3D content without limitations.</span>{" "}
              Whether you need assets for
              <span className="text-cyan-400 font-semibold"> games, movies, or advertisements</span>, we're here to
              elevate your work.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">Step into CGHeven</Button>
          </div>
        </div>
      </section>

      {/* Software Compatibility */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">Compatible With Your Favorite Software</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {["Blender", "Unreal Engine", "Unity", "Houdini", "Maya", "Cinema 4D"].map((software, index) => (
            <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="bg-slate-800 rounded-full h-20 w-20 flex items-center justify-center mb-3 mx-auto">
                <span className="text-xl font-bold">{software.charAt(0)}</span>
              </div>
              <p className="text-sm">{software}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-cyan-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Creative Process?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Join thousands of creators who are already using CGHeven to bring their visions to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-6">Get Started Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              View Asset Library
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer id="contact" className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cube className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">CGHeven</span>
              </div>
              <p className="text-gray-400">
                The ultimate hub for 3D creators, providing high-quality assets for your creative projects.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-purple-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#mission" className="text-gray-400 hover:text-purple-400">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-purple-400">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400">
                    3D Models
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400">
                    VFX Elements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="flex items-center gap-3 text-gray-400 mb-3">
                <Mail className="h-5 w-5 text-purple-500" />
                <span>contact@cgheven.com</span>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">Send Message</Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CGHeven. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
        </>
    )
}

export default AboutUs