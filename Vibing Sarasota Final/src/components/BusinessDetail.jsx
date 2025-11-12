import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, ExternalLink, Clock, Star, Map } from "lucide-react";

export default function BusinessDetail({ business, isOpen, onClose }) {
  if (!business) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Image */}
        <div className="relative -mx-6 -mt-6 h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {business.image_url ? (
            <img
              src={business.image_url}
              alt={business.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-20 h-20 text-gray-300" />
            </div>
          )}
          {business.featured && (
            <Badge className="absolute top-6 right-6 bg-[var(--sunset-coral)] text-white border-none shadow-lg px-3 py-1">
              <Star className="w-4 h-4 mr-1 fill-white" />
              Featured
            </Badge>
          )}
          {business.price_range && (
            <Badge className="absolute top-6 left-6 bg-white/95 text-gray-800 border-none shadow-md px-3 py-1">
              {business.price_range}
            </Badge>
          )}
        </div>

        <DialogHeader className="mt-6">
          <DialogTitle className="text-3xl font-bold text-[var(--deep-navy)]">
            {business.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          {business.description && (
            <div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {business.description}
              </p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid gap-4 bg-gray-50 rounded-xl p-6">
            {business.address && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--ocean-blue)] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Address</div>
                  <div className="text-gray-900">{business.address}</div>
                </div>
              </div>
            )}

            {business.phone && (
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--ocean-blue)] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Phone</div>
                  <a 
                    href={`tel:${business.phone}`} 
                    className="text-gray-900 hover:text-[var(--ocean-blue)] transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>
            )}

            {business.hours && (
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--ocean-blue)] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Hours</div>
                  <div className="text-gray-900">{business.hours}</div>
                </div>
              </div>
            )}

            {business.website && (
              <div className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-[var(--ocean-blue)] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Website</div>
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ocean-blue)] hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            )}

            {business.google_maps_url && (
              <div className="flex items-start gap-3">
                <Map className="w-5 h-5 text-[var(--ocean-blue)] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                  <a
                    href={business.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ocean-blue)] hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 flex-wrap">
            {business.google_maps_url && (
              <Button
                className="flex-1 bg-[var(--ocean-blue)] hover:bg-[var(--ocean-blue)]/90 text-white"
                asChild
              >
                <a href={business.google_maps_url} target="_blank" rel="noopener noreferrer">
                  <Map className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            )}
            {business.website && (
              <Button
                variant="outline"
                className="flex-1 border-[var(--ocean-blue)] text-[var(--ocean-blue)] hover:bg-[var(--ocean-blue)] hover:text-white"
                asChild
              >
                <a href={business.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
            {business.phone && (
              <Button
                variant="outline"
                className="flex-1 border-[var(--ocean-blue)] text-[var(--ocean-blue)] hover:bg-[var(--ocean-blue)] hover:text-white"
                asChild
              >
                <a href={`tel:${business.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}