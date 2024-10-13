"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react" // Import the Search icon

export default function TrackingPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (orderNumber.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter a valid order number.",
        variant: "destructive",
      })
      return
    }
    router.push(`/result/${orderNumber}`)
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Track Your Booking</h1>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Enter Your Order Number</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="e.g., ABC123XYZ"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  <Search className="mr-2 h-4 w-4" />
                  Track
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}