"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot, Search, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const agents = [
    {
      id: 1,
      name: "DataMiner Pro",
      description: "Advanced data analysis and pattern recognition for large datasets",
      price: "0.5 ETH",
      rating: 4.8,
      reviews: 124,
      category: "Analytics",
      tags: ["Data Science", "ML", "Analytics"],
      creator: "0x1234...5678",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "CodeAssist AI",
      description: "Intelligent code generation and debugging assistant",
      price: "0.3 ETH",
      rating: 4.9,
      reviews: 89,
      category: "Development",
      tags: ["Coding", "Debug", "AI"],
      creator: "0x8765...4321",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "TradingBot Elite",
      description: "Automated cryptocurrency trading with advanced strategies",
      price: "1.2 ETH",
      rating: 4.7,
      reviews: 256,
      category: "Finance",
      tags: ["Trading", "Crypto", "DeFi"],
      creator: "0x9876...1234",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "ContentCreator AI",
      description: "Generate high-quality content for blogs and social media",
      price: "0.4 ETH",
      rating: 4.6,
      reviews: 67,
      category: "Content",
      tags: ["Writing", "Content", "Marketing"],
      creator: "0x5432...8765",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "ImageGen Pro",
      description: "Create stunning AI-generated images and artwork",
      price: "0.8 ETH",
      rating: 4.9,
      reviews: 198,
      category: "Creative",
      tags: ["Art", "Images", "Design"],
      creator: "0x2468...1357",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "ChatBot Builder",
      description: "Build intelligent conversational AI for customer service",
      price: "0.6 ETH",
      rating: 4.5,
      reviews: 143,
      category: "Communication",
      tags: ["Chatbot", "NLP", "Customer Service"],
      creator: "0x1357...2468",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Analytics", label: "Analytics" },
    { value: "Development", label: "Development" },
    { value: "Finance", label: "Finance" },
    { value: "Content", label: "Content" },
    { value: "Creative", label: "Creative" },
    { value: "Communication", label: "Communication" },
  ]

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      {/* Navigation */}
      <nav className="border-b border-purple-700/50 backdrop-blur-sm bg-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold text-white">AgentHub</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-white font-medium">
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">AI Agent Marketplace</h1>
          <p className="text-purple-200 text-lg">Discover and deploy powerful AI agents for your needs</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
            <Input
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-purple-800/50 border-purple-600 text-white placeholder-purple-300"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-purple-800/50 border-purple-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-purple-800 border-purple-600">
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value} className="text-white">
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 bg-purple-800/50 border-purple-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-purple-800 border-purple-600">
              <SelectItem value="popular" className="text-white">
                Most Popular
              </SelectItem>
              <SelectItem value="rating" className="text-white">
                Highest Rated
              </SelectItem>
              <SelectItem value="price-low" className="text-white">
                Price: Low to High
              </SelectItem>
              <SelectItem value="price-high" className="text-white">
                Price: High to Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-purple-800/50 border-purple-600 backdrop-blur-sm hover:bg-purple-700/50 transition-all duration-300 hover:scale-105"
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
                  <p className="text-purple-200 mb-4 text-sm">{agent.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-purple-400 text-purple-200 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{agent.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-purple-300" />
                        <span className="text-purple-200 text-sm">{agent.reviews}</span>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-pink-400">{agent.price}</span>
                  </div>

                  <div className="text-xs text-purple-300 mb-4">Created by {agent.creator}</div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white">
                      <Zap className="h-4 w-4 mr-2" />
                      Deploy
                    </Button>
                    <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <Bot className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No agents found</h3>
            <p className="text-purple-200">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
