"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Bot, Upload, Plus, X, Code, Zap } from "lucide-react"
import Link from "next/link"

export default function CreateAgentPage() {
  const [agentName, setAgentName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const categories = [
    "Analytics",
    "Development",
    "Finance",
    "Content",
    "Creative",
    "Communication",
    "Automation",
    "Security",
  ]

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

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
              <Link href="/marketplace" className="text-purple-200 hover:text-white transition-colors">
                Marketplace
              </Link>
              <Link href="/create" className="text-white font-medium">
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Create AI Agent</h1>
          <p className="text-purple-200 text-lg">Deploy your AI agent to the decentralized marketplace</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-purple-200">
                    Agent Name
                  </Label>
                  <Input
                    id="name"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="Enter agent name"
                    className="bg-purple-700/50 border-purple-500 text-white placeholder-purple-300"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-purple-200">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what your agent does"
                    rows={4}
                    className="bg-purple-700/50 border-purple-500 text-white placeholder-purple-300"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category" className="text-purple-200">
                      Category
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="bg-purple-700/50 border-purple-500 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-purple-800 border-purple-600">
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat} className="text-white">
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price" className="text-purple-200">
                      Price (ETH)
                    </Label>
                    <Input
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.5"
                      type="number"
                      step="0.01"
                      className="bg-purple-700/50 border-purple-500 text-white placeholder-purple-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <Badge key={tag} className="bg-pink-600 text-white">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="ml-2 hover:text-pink-200">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    className="bg-purple-700/50 border-purple-500 text-white placeholder-purple-300"
                    onKeyPress={(e) => e.key === "Enter" && addTag()}
                  />
                  <Button onClick={addTag} className="bg-pink-600 hover:bg-pink-700">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Agent Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-purple-500 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Upload Agent Files</h3>
                  <p className="text-purple-200 mb-4">Upload your agent's code, model files, and configuration</p>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white">Choose Files</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-purple-700/50 rounded-lg flex items-center justify-center">
                    <Bot className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{agentName || "Agent Name"}</h3>
                  <p className="text-purple-200 text-sm">{description || "Agent description will appear here..."}</p>
                  {category && <Badge className="bg-pink-600 text-white">{category}</Badge>}
                  {price && <div className="text-xl font-bold text-pink-400">{price} ETH</div>}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Deployment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-purple-200">
                  <p className="mb-2">Deployment will:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Create smart contract</li>
                    <li>Upload to IPFS</li>
                    <li>List on marketplace</li>
                  </ul>
                </div>
                <div className="border-t border-purple-600 pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-purple-200">Gas Fee:</span>
                    <span className="text-white">~0.02 ETH</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-purple-200">Platform Fee:</span>
                    <span className="text-white">2.5%</span>
                  </div>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  <Zap className="h-4 w-4 mr-2" />
                  Deploy Agent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
