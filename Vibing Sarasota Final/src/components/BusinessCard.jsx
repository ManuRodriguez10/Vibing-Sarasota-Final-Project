import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, ExternalLink, Star } from "lucide-react";

export default function BusinessCard({ business, onClick }) {
  return (
    <Card 
      className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white hover:-translate-y-1"
      onClick={() => onClick(business)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {business.image_url ? (
          <img
            src={business.image_url}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MapPin className="w-16 h-16 text-gray-300" />
          </div>
        )}
        {business.featured && (
          <Badge className="absolute top-4 right-4 bg-[var(--sunset-coral)] text-white border-none shadow-lg">
            <Star className="w-3 h-3 mr-1 fill-white" />
            Featured
          </Badge>
        )}
        {business.price_range && (
          <Badge className="absolute top-4 left-4 bg-white/95 text-gray-800 border-none shadow-md">
            {business.price_range}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--deep-navy)] mb-2 group-hover:text-[var(--ocean-blue)] transition-colors">
          {business.name}
        </h3>
        
        {business.short_description && (
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {business.short_description}
          </p>
        )}

        <div className="space-y-2 text-sm text-gray-500">
          {business.address && (
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--ocean-blue)]" />
              <span className="line-clamp-1">{business.address}</span>
            </div>
          )}
          {business.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-[var(--ocean-blue)]" />
              <span>{business.phone}</span>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--ocean-blue)]">View Details</span>
          <ExternalLink className="w-4 h-4 text-[var(--ocean-blue)] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Card>
  );
}