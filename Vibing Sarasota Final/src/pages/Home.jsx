import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, MapPin, Star, Waves, Dumbbell, Utensils, Flag, ShoppingBag, Hotel, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const categories = [
  {
    name: "Beaches",
    icon: Waves,
    color: "from-cyan-400 to-blue-500",
    description: "Pristine white sand beaches",
    url: createPageUrl("Beaches")
  },
  {
    name: "Exercise Spots",
    icon: Dumbbell,
    color: "from-green-400 to-emerald-500",
    description: "Parks, trails, and outdoor fitness",
    url: createPageUrl("ExerciseSpots")
  },
  {
    name: "Food & Dining",
    icon: Utensils,
    color: "from-orange-400 to-red-500",
    description: "Restaurants and culinary experiences",
    url: createPageUrl("FoodDining")
  },
  {
    name: "Golf Spots",
    icon: Flag,
    color: "from-teal-400 to-green-600",
    description: "Championship golf courses",
    url: createPageUrl("GolfSpots")
  },
  {
    name: "Shopping",
    icon: ShoppingBag,
    color: "from-purple-400 to-pink-500",
    description: "Unique boutiques and local shops",
    url: createPageUrl("Shopping")
  },
  {
    name: "Hotels",
    icon: Hotel,
    color: "from-blue-400 to-indigo-500",
    description: "Luxurious stays by the beach",
    url: createPageUrl("Hotels")
  }];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px]">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
              <MapPin className="w-4 h-4 text-[var(--ocean-blue)]" />
              <span className="text-sm font-medium text-gray-800">Sarasota, Florida</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-orange-300 bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                Sarasota's Best
              </span>
            </h1>
            
            <p className="text-xl text-white/95 leading-relaxed mb-8 max-w-2xl drop-shadow-md">
              Your curated guide to the finest local businesses in paradise. 
              From award-winning restaurants to hidden gems, explore everything 
              that makes Sarasota special.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[var(--ocean-blue)] px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                asChild>
                <Link to={createPageUrl("Beaches")}>
                  Explore Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white border-none px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                asChild>
                <Link to={createPageUrl("SuggestBusiness")}>
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Suggest a Spot
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl" />
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--deep-navy)] mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Sarasota's vibrant local scene across different categories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                to={category.url}
                className="group">

                <Card className="p-8 border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full bg-white hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--deep-navy)] mb-3 group-hover:text-[var(--ocean-blue)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[var(--ocean-blue)] font-medium group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>);

          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--deep-navy)] mb-4">Why Vibing Sarasota?

            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted companion for authentic local experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              title: "Carefully Curated",
              description: "Every business is hand-selected to ensure quality and authenticity",
              icon: Star
            },
            {
              title: "Local Expertise",
              description: "Insider knowledge from Sarasota locals who know the area best",
              icon: MapPin
            },
            {
              title: "Always Updated",
              description: "Fresh, current information to help you make the best decisions",
              icon: ArrowRight
            }].
            map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--ocean-blue)] to-[var(--soft-sky)] rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--deep-navy)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>);

            })}
          </div>
        </div>
      </section>
    </div>);

}