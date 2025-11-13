import React, { useState } from "react";
import { Business } from "@/api/entities";
import { useQuery } from "@tanstack/react-query";
import { Hotel, Search, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import BusinessCard from "../components/BusinessCard";
import BusinessDetail from "../components/BusinessDetail";

export default function Hotels() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: businesses = [], isLoading } = useQuery({
    queryKey: ["businesses", "Hotels"],
    queryFn: () => Business.filter({ category: "Hotels" }),
  });

  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    business.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Hotel className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--deep-navy)]">
                Hotels
              </h1>
              <p className="text-gray-600 mt-1">Luxurious stays by the beach</p>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-xl mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search hotels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-xl border-gray-200 focus:border-[var(--ocean-blue)] shadow-sm"
              />
            </div>
          </div>

          {/* Price Range Key */}
          <Card className="mt-6 p-6 bg-white/90 backdrop-blur-sm border-blue-100 shadow-md max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-800">Price Range Guide</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-bold text-gray-800">$</span>
                <p className="text-gray-600">Inexpensive</p>
              </div>
              <div>
                <span className="font-bold text-gray-800">$$</span>
                <p className="text-gray-600">Moderate</p>
              </div>
              <div>
                <span className="font-bold text-gray-800">$$$</span>
                <p className="text-gray-600">Expensive</p>
              </div>
              <div>
                <span className="font-bold text-gray-800">$$$$</span>
                <p className="text-gray-600">Very Expensive</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-56 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredBusinesses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onClick={setSelectedBusiness}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Hotel className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchQuery ? "No hotels found" : "No hotels yet"}
            </h3>
            <p className="text-gray-500">
              {searchQuery ? "Try a different search term" : "Check back soon for hotel listings"}
            </p>
          </div>
        )}
      </section>

      {/* Business Detail Modal */}
      <BusinessDetail
        business={selectedBusiness}
        isOpen={!!selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
      />
    </div>
  );
}