import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Smartphone, CalendarDays, ChartColumn } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StreakBuddyLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/80 sticky top-0 z-50 border-b border-purple-100">
        <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="Streak Buddy"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Streak Buddy
          </span>
        </div>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link href="#signup" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Join Our Waitlist
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-5xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Finally, Build Habits That Stick
                  <br />
                  <span className="text-gray-900">With The Help of a Buddy</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600">
                  Stay accountable, build streaks together, and turn daily tasks into shared victories. The
                  habit-building app designed specifically for people with ADHD.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    
                  >
                    Get Early Access
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Smartphone className="h-4 w-4" />
                <span>Coming to iOS & Android</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto justify-center px-4 md:px-6">
            <div className="grid gap-12 items-center">
              <div className="space-y-8 justify-center mx-auto">
                <div className="space-y-4 max-w-5xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">{`Tired of habit apps that don't work?`}</h2>
                  <p className="text-lg text-gray-600 text-center">
                    {`It's not your fault. Most productivity solutions weren't built for ADHD. Typical apps assume self-motivation is enough, leaving you to battle dopamine depletion alone, causing you to:`} 
                  </p>
                </div>

                <div className="grid max-w-2xl md:grid-cols-2 gap-x-32 gap-y-8 mb-10  pt-8 mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">🤦‍♂️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Forget</h3>
                      <p className="text-gray-600 w-72">
                        With so much going through your mind, things fall through the cracks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">😵</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Get Overwhelmed</h3>
                      <p className="text-gray-600 w-72">
                        {`When your to-do list swirls into chaos and you're drowning in good intentions.`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">😔</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Lose Motivation</h3>
                      <p className="text-gray-600 w-72">
                        We all relate to having so much initial excitement in the beginning, and then fizzling out.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">😵‍💫</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Feel Frustrated</h3>
                      <p className="text-gray-600 w-72">
                        Too many functions and a confusing UI leave you feeling frustrated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-300 to-pink-300">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-5xl font-semibold text-gray-900 mb-2 text-center">
              You don’t have to do it alone.
            </h2>
            <p className="text-5xl text-gray-900 text-center">
              Imagine what you could do if every habit had a buddy cheering you on.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-2xl font-bold text-gray-900">Introducing</h3>
              <h1 className="inline-block text-7xl pb-4 font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Streak Buddy</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {`Streak Buddy pairs you with a friend who shares your goal. When you both succeed, your streak grows. When one stumbles, you're there for each other.`}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-purple-100">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pair Up Easily</h3>
                  <p className="text-gray-600">
                    Invite your accountability buddy instantly. Connect with friends, family, or find a new buddy in our
                    community.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-pink-100">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500  rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pick Your Habit</h3>
                  <p className="text-gray-600">
                    Choose simple, achievable daily tasks. Start small and build momentum with ADHD-friendly habit
                    suggestions.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <CalendarDays className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Build a Streak Together</h3>
                  <p className="text-gray-600">
                    Complete tasks together to maintain your streak. Hold each other accountable and support each other
                    through challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <ChartColumn className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Compare Stats</h3>
                  <p className="text-gray-600">
                    Compare your stats side-by-side to spark friendly competition and keep each other motivated.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



        {/* Social Proof Section */}
        {/* <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join the Community</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Thousands of people with ADHD are already building better habits together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Finally, an app that gets how my ADHD brain works. The buddy system makes all the difference!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">S</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah M.</p>
                      <p className="text-sm text-gray-500">Beta Tester</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "I've tried every habit app out there. This is the first one that actually stuck with me."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">M</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Mike R.</p>
                      <p className="text-sm text-gray-500">Early Adopter</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The visual progress tracking and gentle reminders are perfect for my ADHD. Love it!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">A</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Alex T.</p>
                      <p className="text-sm text-gray-500">Community Member</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section
          id="signup"
          className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Build Habits That Actually Stick?
                </h2>
                <p className="text-lg text-purple-100">
                  Join our waitlist and be the first to know when Streak Buddy launches.
                </p>
              </div>

              <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:bg-white/30"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Join Our Waitlist
                    </Button>
                  </form>
                  <p className="text-xs text-purple-200 mt-4 text-center">
                    Join 100+ people waiting for launch • Coming Soon
                  </p>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center gap-8 text-purple-200">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-sm">iOS & Android</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-400">Made by Jonathan Nguyen</p>
            {/* <div className="flex gap-6">
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
