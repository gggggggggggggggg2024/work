import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function MystiqueEntertainment() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center py-10">
        <motion.h1 
          className="text-5xl font-bold tracking-wide" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          MYSTIQUE ENTERTAINMENT
        </motion.h1>
        <p className="mt-4 text-lg">Bringing the extraordinary to life.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gray-900 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold">Event Hosting</h2>
            <p className="mt-2">We organize and host top-tier events tailored to your needs.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold">Room Booking & AirBnB Rentals</h2>
            <p className="mt-2">Luxury accommodations for short and long stays.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold">Clothing Store</h2>
            <p className="mt-2">Explore a unique collection of stylish and trendy fashion.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold">DJ Hiring</h2>
            <p className="mt-2">Professional DJs to make your events unforgettable.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold">Join Us</h2>
            <p className="mt-2">Be part of a movement that redefines entertainment.</p>
            <Button className="mt-4">Get in Touch</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
