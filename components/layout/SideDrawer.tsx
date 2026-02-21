"use client"

import { X } from "lucide-react"
import ContactForm from "@/components/ui/ContactForm"

interface SideDrawerProps {
  open: boolean
  onClose: () => void
}

export default function SideDrawer({ open, onClose }: SideDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto transition-transform duration-300 shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Get In Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close drawer"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
