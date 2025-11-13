import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuggestedBusiness } from "@/api/entities";
import { useMutation } from "@tanstack/react-query";
import { Lightbulb, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function SuggestBusiness() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    category: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useMutation({
    mutationFn: (data) => SuggestedBusiness.create(data),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        address: "",
        category: "",
        description: ""
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const categories = [
    "Beaches",
    "Exercise Spots",
    "Food & Dining",
    "Golf Spots",
    "Shopping",
    "Hotels"
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center shadow-xl border-none">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-3">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your suggestion has been submitted successfully. We'll review it and add it to our listings soon!
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-[var(--ocean-blue)] hover:bg-[var(--deep-navy)] text-white"
          >
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--deep-navy)]">
                Suggest a Spot
              </h1>
              <p className="text-gray-600 mt-1">Help us grow our community</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Know a great local business we should feature? Tell us below.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-8 sm:p-12 shadow-xl border-none bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name and Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Business name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="py-6 text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="py-6 text-base"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <Input
                type="text"
                placeholder="Street, City, State"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="py-6 text-base"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger className="py-6 text-base">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Details
              </label>
              <Textarea
                placeholder="Tell us more about this business..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="h-32 text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={submitMutation.isPending}
                className="w-full sm:w-auto bg-[var(--ocean-blue)] hover:bg-[var(--deep-navy)] text-white px-12 py-6 text-lg"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Suggestion"
                )}
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}