import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Search, Bell, Home, User, Users, Settings } from "lucide-react";

export default function Dashboard() {
  const mockPosts = [
    {
      id: 1,
      author: { name: "Sarah Johnson", username: "@sarah_j", avatar: "/placeholder.svg" },
      content: "Just finished my morning run in the park! The weather is absolutely perfect today. Nothing beats starting the day with some fresh air and exercise. Who else is getting their workout in today?",
      image: "/placeholder.svg",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: { name: "Mike Chen", username: "@mike_dev", avatar: "/placeholder.svg" },
      content: "Excited to share that I just launched my new project! It's a social platform built with Next.js and it's been an incredible journey. Thanks to everyone who supported me along the way. 🚀",
      timestamp: "4 hours ago",
      likes: 156,
      comments: 32,
      shares: 18
    },
    {
      id: 3,
      author: { name: "Emma Wilson", username: "@emma_design", avatar: "/placeholder.svg" },
      content: "Working on some new UI designs for a client project. The clean, minimal aesthetic is really coming together nicely. Sometimes less really is more!",
      image: "/placeholder.svg",
      timestamp: "6 hours ago",
      likes: 89,
      comments: 15,
      shares: 7
    }
  ];

  const trendingTopics = [
    "#WebDevelopment",
    "#Design",
    "#Fitness",
    "#Technology",
    "#StartupLife"
  ];

  const suggestedFriends = [
    { name: "Alex Thompson", username: "@alex_t", mutualFriends: 12 },
    { name: "Jessica Brown", username: "@jess_b", mutualFriends: 8 },
    { name: "David Lee", username: "@david_dev", mutualFriends: 15 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-primary">Ronin</h1>
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-10 w-80"
                  placeholder="Search Ronin..."
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Home className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3">
            <div className="space-y-6">
              {/* User Profile Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">@john_doe</p>
                    <div className="flex gap-4 mt-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">456</div>
                        <div className="text-muted-foreground">Following</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">1.2K</div>
                        <div className="text-muted-foreground">Followers</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Friends
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-6">
            <div className="space-y-6">
              {/* Create Post */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <Textarea
                        placeholder="What's on your mind, John?"
                        className="min-h-[100px] resize-none border-none p-0 focus-visible:ring-0"
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Photo
                          </Button>
                          <Button variant="ghost" size="sm">
                            Video
                          </Button>
                          <Button variant="ghost" size="sm">
                            Poll
                          </Button>
                        </div>
                        <Button>Post</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              {mockPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{post.author.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {post.author.username} • {post.timestamp}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="mb-4">{post.content}</p>
                    {post.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Post content" 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                    <Separator className="mb-4" />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          {post.shares}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            <div className="space-y-6">
              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Trending Topics</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer">
                        <Badge variant="secondary">{topic}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Friends */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">People You May Know</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {suggestedFriends.map((friend, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>
                              {friend.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-sm font-medium">{friend.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {friend.mutualFriends} mutual friends
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}