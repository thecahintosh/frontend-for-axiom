"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, TrendingUp, Users, Zap, Star, Settings, Eye, Pause, Play } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeAgents, setActiveAgents] = useState(3)

  const myAgents = [
    {
      id: 1,
      name: "DataMiner Pro",
      status: "active",
      deployments: 45,
      revenue: "2.3 ETH",
      rating: 4.8,
      category: "Analytics",
    },
    {
      id: 2,
      name: "CodeAssist AI",
      status: "active",
      deployments: 23,
      revenue: "1.1 ETH",
      rating: 4.9,
      category: "Development",
    },
    {
      id: 3,
      name: "TradingBot Elite",
      status: "paused",
      deployments: 67,
      revenue: "5.4 ETH",
      rating: 4.7,
      category: "Finance",
    },
  ]

  const recentActivity = [
    { type: "deployment", agent: "DataMiner Pro", user: "0x1234...5678", time: "2 hours ago" },
    { type: "purchase", agent: "CodeAssist AI", user: "0x8765...4321", time: "4 hours ago" },
    { type: "review", agent: "TradingBot Elite", rating: 5, time: "6 hours ago" },
    { type: "deployment", agent: "DataMiner Pro", user: "0x9876...1234", time: "8 hours ago" },
  ]

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
              <Link href="/create" className="text-purple-200 hover:text-white transition-colors">
                Create Agent
              </Link>
              <Link href="/dashboard" className="text-white font-medium">
                Dashboard
              </Link>
            </div>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">Connect Wallet</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-purple-200 text-lg">Manage your AI agents and track performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">8.8 ETH</p>
                </div>
                <TrendingUp className="h-8 w-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Active Agents</p>
                  <p className="text-2xl font-bold text-white">{activeAgents}</p>
                </div>
                <Bot className="h-8 w-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Total Deployments</p>
                  <p className="text-2xl font-bold text-white">135</p>
                </div>
                <Zap className="h-8 w-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Avg Rating</p>
                  <p className="text-2xl font-bold text-white">4.8</p>
                </div>
                <Star className="h-8 w-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="agents" className="space-y-6">
          <TabsList className="bg-purple-800/50 border-purple-600">
            <TabsTrigger value="agents" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
              My Agents
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
              Recent Activity
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My Agents</h2>
              <Link href="/create">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">Create New Agent</Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {myAgents.map((agent) => (
                <Card key={agent.id} className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center">
                          <Bot className="h-6 w-6 text-pink-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge className={agent.status === "active" ? "bg-green-600" : "bg-yellow-600"}>
                              {agent.status}
                            </Badge>
                            <Badge className="bg-pink-600">{agent.category}</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-purple-200 text-sm">Deployments</p>
                          <p className="text-white font-semibold">{agent.deployments}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-purple-200 text-sm">Revenue</p>
                          <p className="text-white font-semibold">{agent.revenue}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-purple-200 text-sm">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-white font-semibold">{agent.rating}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-purple-400 text-purple-200">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-purple-400 text-purple-200">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-purple-400 text-purple-200">
                            {agent.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
            <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-purple-700/50 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                          {activity.type === "deployment" && <Zap className="h-4 w-4 text-white" />}
                          {activity.type === "purchase" && <Users className="h-4 w-4 text-white" />}
                          {activity.type === "review" && <Star className="h-4 w-4 text-white" />}
                        </div>
                        <div>
                          <p className="text-white">
                            {activity.type === "deployment" && `${activity.agent} deployed by ${activity.user}`}
                            {activity.type === "purchase" && `${activity.agent} purchased by ${activity.user}`}
                            {activity.type === "review" && `${activity.agent} received ${activity.rating}-star review`}
                          </p>
                          <p className="text-purple-200 text-sm">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Analytics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-purple-700/30 rounded-lg flex items-center justify-center">
                    <p className="text-purple-200">Revenue chart would go here</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/50 border-purple-600 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Deployment Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-purple-700/30 rounded-lg flex items-center justify-center">
                    <p className="text-purple-200">Activity chart would go here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
