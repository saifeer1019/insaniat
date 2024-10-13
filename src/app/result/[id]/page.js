"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { CalendarIcon, ClockIcon, UserIcon, PackageIcon, CreditCardIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BookingResult() {
  const { id } = useParams() // Changed from orderNumber to id
  const [booking, setBooking] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetch(`/api/bookings?orderNumber=${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Booking not found');
          }
          return response.json();
        })
        .then((data) => {
          setBooking(data);
          setIsLoading(false);
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (!booking) {
    return <div>No booking found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto bg-white border border-green-800">
        <CardHeader>
          <CardTitle className="text-green-800">Booking Details</CardTitle>
          <CardDescription className="text-green-600">Order #{booking.orderNumber}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-green-800">Status:</span>
            <Badge variant={booking.bookingStatus === 'Confirmed' ? 'default' : 'secondary'}>
              {booking.bookingStatus}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-green-800">Payment:</span>
            <Badge variant={booking.paymentStatus === 'Paid' ? 'default' : 'destructive'}>
              {booking.paymentStatus}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <UserIcon className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-green-800">{booking.fullName}</span>
              </div>
              <div className="text-green-600">{booking.phone}</div>
              <div className="text-green-600">{booking.email}</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <PackageIcon className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-green-800">{booking.packageName}</span>
              </div>
              <div className="text-green-600">{booking.people} people</div>
              <div className="flex items-center">
                <CreditCardIcon className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-green-800">Total: ${booking.total}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <ClockIcon className="mr-2 h-4 w-4 text-green-600" />
              <span className="text-green-600">Booked on: {new Date(booking.bookedOn).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4 text-green-600" />
              <span className="text-green-600">
                Journey: {new Date(booking.journeyStart).toLocaleDateString()} - {new Date(booking.journeyEnd).toLocaleDateString()}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            If you have any questions about your booking, please contact our customer support.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}