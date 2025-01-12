import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  return (
    <div className='min-h-[calc(100vh-7.1rem)] flex justify-center items-center max-w-6xl mx-auto p-6'>
      
        <div className="space-y-6">
            <div className="space-y-2">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-gray-500">
                We&apos;d love to hear from you! Our team typically responds within 24 hours to help with your inquiry.
            </p>
            </div>

            <form className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                id="message"
                placeholder="Type your message"
                className="min-h-[120px]"
                />
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm">
                By selecting this you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                </a>
                </Label>
            </div>

            <Button className="w-full">Send message</Button>
            </form>
        </div>
    </div>
  );
};

export default ContactPage;