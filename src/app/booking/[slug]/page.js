"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast'

const packages = {
  "explorer": { name: "Explorer Pack (5-10 people)", price: 9500, min: 5, max: 10 },
  "adventurer": { name: "Adventurer Pack (11-20 people)", price: 9000, min: 11, max: 20 },
  "voyager": { name: "Voyager Pack (21-30 people)", price: 8500, min: 21, max: 30 },
}

// Sample journey dates
const journeyDates = [
  new Date(new Date().setDate(new Date().getDate() + 7)), // 1 week from now
  new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks from now
  new Date(new Date().setDate(new Date().getDate() + 21)), // 3 weeks from now
  new Date(new Date().setDate(new Date().getDate() + 28)), // 4 weeks from now
  new Date(new Date().setDate(new Date().getDate() + 35)), // 5 weeks from now
];

export default function BookingPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    packageName: "",
    people: 1,
    journeyStart: new Date(),
  });

  const [price, setPrice] = useState({ unitPrice: 0, total: 0 });
  const [confirmationMessage, setConfirmationMessage] = useState(""); // For confirmation message
  const [maxPeople, setMaxPeople] = useState(10); // Default max people for the first package



  useEffect(() => {
    if (formData.packageName && formData.people) {
      const unitPrice = packages[formData.packageName].price;
      const total = unitPrice * formData.people;
      setPrice({ unitPrice, total });
    }
  }, [formData.packageName, formData.people]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'people' ? Math.min(parseInt(value), maxPeople) : value }));
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "packageName") {
      setMaxPeople(packages[value].max); // Update max people based on selected package
      setFormData(prev => ({ ...prev, people: Math.min(prev.people, packages[value].max) })); // Adjust people if over max
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send booking data to the API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          packageName: formData.packageName,
          people: formData.people,
          unitPrice: price.unitPrice,
          total: price.total,
          journeyStart: formData.journeyStart,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      const orderNumber = await response.json();
      setConfirmationMessage(`Thank you! Your booking number is ${orderNumber.orderNumber}. Please note this down. We will send you an email and call you soon.`);
      router.push(`/booking/${orderNumber.orderNumber}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const { toast } = useToast();
  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Book Your Sundarbans Adventure</h1>
        {confirmationMessage ? (
          <div className="text-center text-green-800">
            <h2 className="text-xl font-bold">{confirmationMessage}</h2>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="flex-grow">
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="packageName">Package</Label>
                    <Select onValueChange={(value) => handleSelectChange("packageName", value)} value={formData.packageName}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="explorer">Explorer Pack (5-10 people)</SelectItem>
                        <SelectItem value="adventurer">Adventurer Pack (11-20 people)</SelectItem>
                        <SelectItem value="voyager">Voyager Pack (21-30 people)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="people">Number of People (Max: {maxPeople})</Label>
                    <Input
                      id="people"
                      name="people"
                      type="number"
                      value={formData.people}
                      onChange={handleInputChange}
                      min={1}
                      max={maxPeople} // Set max limit based on package
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Journey Date</Label>
                    <Select onValueChange={(value) => handleSelectChange("journeyStart", new Date(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a journey date" />
                      </SelectTrigger>
                      <SelectContent>
                        {journeyDates.map((date, index) => (
                          <SelectItem key={index} value={date.toISOString()}>
                            {date.toDateString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Book Now"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="lg:w-80">
              <CardHeader>
                <CardTitle>Price Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Package:</span>
                    <span>{formData.packageName ? packages[formData.packageName].name : 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Number of People:</span>
                    <span>{formData.people}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Price per Person:</span>
                    <span>Tk. {formData.packageName ? packages[formData.packageName].price.toLocaleString() : '0'}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Price:</span>
                    <span>Tk. {formData.packageName ? (packages[formData.packageName].price * formData.people).toLocaleString() : '0'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}