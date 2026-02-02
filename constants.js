
import React from 'react';
import { Ship, FileText, Tag, Truck, ShieldCheck, Globe, Clock, BadgeCheck } from 'lucide-react';

export const BRAND_COLORS = {
  primary: '#0A5CFF',
  accent: '#EAF1FF',
  text: '#0F172A',
  white: '#FFFFFF',
  gray: '#F6F8FC',
  whatsapp: '#25D366'
};

export const MOCK_CARS = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Land Cruiser V8',
    year: 2022,
    price: 'Rs. 85,000,000',
    condition: 'Brand New',
    image: 'https://images.unsplash.com/photo-1594976612318-961f01f80293?q=80&w=800&auto=format&fit=crop',
    images: [],
    status: 'Available',
    specs: { engine: '4.5L V8', fuel: 'Diesel' },
    description: 'Pristine condition, fully loaded with luxury features.'
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'G63 AMG',
    year: 2023,
    price: 'Rs. 125,000,000',
    condition: 'Brand New',
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    images: [],
    status: 'Sold',
    specs: { engine: '4.0L V8', fuel: 'Petrol' }
  },
  {
    id: '3',
    brand: 'Toyota',
    model: 'Premio F-EX',
    year: 2019,
    price: 'Rs. 22,500,000',
    condition: 'Used',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    images: [],
    status: 'Available',
    specs: { mileage: '35,000 km', engine: '1.5L', fuel: 'Petrol' }
  }
];

export const TRUST_STATS = [
  { label: 'Cars Delivered', value: 1250, icon: '🚗', color: '#0A5CFF' },
  { label: 'Years Experience', value: 12, icon: '🏆', color: '#6366F1' },
  { label: 'Custom Success', value: 100, icon: '✅', suffix: '%', color: '#25D366' },
  { label: 'Global Partners', value: 45, icon: '🌐', color: '#F59E0B' }
];

export const OUR_PROCESS = [
  {
    title: 'Source & Select',
    icon: React.createElement(Globe, { size: 24 }),
    desc: 'We source only grade 4.5+ vehicles from premium Japanese and European auctions.'
  },
  {
    title: 'Legal Clearance',
    icon: React.createElement(ShieldCheck, { size: 24 }),
    desc: 'Every document is strictly verified for 100% Sri Lankan customs compliance.'
  },
  {
    title: 'Shipping & Log',
    icon: React.createElement(Ship, { size: 24 }),
    desc: 'Fast tracking and safe RO-RO shipping directly to Colombo or Hambantota port.'
  },
  {
    title: 'Home Delivery',
    icon: React.createElement(Truck, { size: 24 }),
    desc: 'Registered and delivered right to your doorstep with full detailing service.'
  }
];

export const MOCK_REVIEWS = [
  {
    id: '1',
    name: 'Dilshan Perera',
    rating: 5,
    date: 'OCT 2023',
    comment: 'Exceptional service. The Toyota Land Cruiser I imported through Solo-So was exactly as described in the auction report. Highly recommended for direct imports.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Sanduni Jayawardena',
    rating: 5,
    date: 'SEP 2023',
    comment: 'The team at Solo-So made the entire import process so easy. From bidding to clearing, they handled everything. Very transparent pricing.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  }
];

export const MOCK_STORIES = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop',
    title: 'New Arrival: Toyota Hilux Rocco'
  },
  {
    id: '2',
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-fast-car-moving-on-a-highway-34538-large.mp4',
    title: 'Port Clearance in Progress'
  },
  {
    id: '3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    title: 'Customer Delivery: Chevrolet Camaro'
  }
];
