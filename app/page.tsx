import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Zap, Shield, TrendingUp, Star } from "lucide-react"

export default function HomePage() {
  const featuredAgents = [
    {
      id: 1,
      name: "Abdjasklj",
      description: "jnkjndkjndwq",
      price: "0.5 ETH",
      rating: 4.8,
      category: "kjn",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "mnkjdcn",
      description: "kjnscd",
      price: "0.3 ETH",
      rating: 4.9,
      category: "nkljncsd",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Tkjnkcwjdndjwnkdjsn",
      description: "kjnkdjsn",
      price: "1.2 ETH",
      rating: 4.7,
      category: "Finance",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <nav className="border-b border-purple-700/50 backdrop-blur-sm bg-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold text-white">Axiom</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-purple-200 hover:text-white transition-colors">
                Marketplace
              </Link>
              <Link href="/create" className="text-purple-200 hover:text-white transition-colors">
                Create Agent
              </Link>
              <Link href="/dashboard" className="text-purple-200 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">Connect Wallet</Button>
          </div>
        </div>
      </nav>
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Decentralized
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                AI Marketplace
              </span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Discover, deploy, and monetize AI agents on the blockchain.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Link href="/marketplace" className="flex items-center">
                  Explore Agents <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-xl"></div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Axiom?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Trustless</h3>
                <p className="text-purple-200">
                  Smart contracts ensure secure transactions and agent deployment without intermediaries.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
                <p className="text-purple-200">
                  Optimized AI agents running on distributed infrastructure for maximum efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Monetize AI</h3>
                <p className="text-purple-200">Create and sell your AI agents to earn cryptocurrency rewards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white">Featured Agents</h2>
            <Link href="/marketplace">
              <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAgents.map((agent) => (
              <Card
                key={agent.id}
                className="bg-purple-800/50 border-purple-600 backdrop-blur-sm hover:bg-purple-700/50 transition-colors"
              >
                <CardContent className="p-0">
                  <img
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                      <Badge className="bg-pink-600 text-white">{agent.category}</Badge>
                    </div>
                    <p className="text-purple-200 mb-4">{agent.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white">{agent.rating}</span>
                      </div>
                      <span className="text-2xl font-bold text-pink-400">{agent.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">1,247</div>
              <div className="text-purple-200">Active Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">89.2K</div>
              <div className="text-purple-200">Total Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">$2.4M</div>
              <div className="text-purple-200">Volume Traded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">99.8%</div>
              <div className="text-purple-200">Uptime</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-purple-700/50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-6 w-6 text-pink-400" />
                <span className="text-xl font-bold text-white">Axiom</span>
              </div>
              <p className="text-purple-200">The premier decentralized marketplace for AI agents.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="/marketplace">Marketplace</Link>
                </li>
                <li>
                  <Link href="/create">Create Agent</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="/docs">Documentation</Link>
                </li>
                <li>
                  <Link href="/api">API</Link>
                </li>
                <li>
                  <Link href="/support">Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="/discord">Discord</Link>
                </li>
                <li>
                  <Link href="/twitter">Twitter</Link>
                </li>
                <li>
                  <Link href="/github">GitHub</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-700/50 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2025 Axiom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
