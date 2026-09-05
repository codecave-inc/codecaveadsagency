export type Billboard = {
  id: string;
  title: string;
  state: string;
  city: string;
  landmark: string;
  type: "Static" | "Digital/LED" | "Transit" | "Street Furniture";
  size: string;
  illumination: boolean;
  facing: string;
  trafficEstimate: string;
  pricePerWeek: number;
  images: string[];
  verifiedOwner: boolean;
  description: string;
  rating: number;
  reviewCount: number;
};

// Placeholder listings — all photos are crops of the single AI-generated
// billboard image supplied in the Stitch design package. These will be
// replaced by real owner-submitted photos once listings go live (Stage 6).
export const MOCK_BILLBOARDS: Billboard[] = [
  {
    id: "1",
    title: "Third Mainland Bridge Approach — Digital LED",
    state: "Lagos",
    city: "Lagos Mainland",
    landmark: "Third Mainland Bridge, Oworonshoki approach",
    type: "Digital/LED",
    size: "20ft x 10ft",
    illumination: true,
    facing: "Inbound traffic, morning peak",
    trafficEstimate: "~85,000 vehicles/day",
    pricePerWeek: 350000,
    images: ["/images/billboard-card-1.jpg", "/images/billboard-hero.jpg"],
    verifiedOwner: true,
    description:
      "High-visibility digital LED screen positioned at the main approach to Third Mainland Bridge, capturing heavy commuter traffic every morning and evening. Full-color, high-brightness display suitable for short rotating ad slots.",
    rating: 4.8,
    reviewCount: 12,
  },
  {
    id: "2",
    title: "Ikorodu Road Static Billboard",
    state: "Lagos",
    city: "Ikorodu",
    landmark: "Near Ikorodu Roundabout",
    type: "Static",
    size: "48ft x 14ft",
    illumination: false,
    facing: "Both directions",
    trafficEstimate: "~60,000 vehicles/day",
    pricePerWeek: 180000,
    images: ["/images/billboard-card-2.jpg"],
    verifiedOwner: true,
    description:
      "Classic large-format static billboard on one of Lagos' busiest arterial roads, ideal for month-long brand campaigns targeting daily commuters.",
    rating: 4.5,
    reviewCount: 7,
  },
  {
    id: "3",
    title: "Wuse Zone 4 Digital Screen",
    state: "Abuja (FCT)",
    city: "Wuse",
    landmark: "Zone 4, near shopping district",
    type: "Digital/LED",
    size: "16ft x 9ft",
    illumination: true,
    facing: "Pedestrian & vehicle, evening peak",
    trafficEstimate: "~40,000 daily impressions",
    pricePerWeek: 260000,
    images: ["/images/billboard-card-3.jpg"],
    verifiedOwner: false,
    description:
      "Digital display in Abuja's Wuse Zone 4 commercial district, popular with both pedestrians and drivers, well suited to retail and lifestyle brands.",
    rating: 4.2,
    reviewCount: 3,
  },
  {
    id: "4",
    title: "Port Harcourt Airport Road Billboard",
    state: "Rivers",
    city: "Port Harcourt",
    landmark: "Airport Road, near NAF Roundabout",
    type: "Static",
    size: "40ft x 12ft",
    illumination: true,
    facing: "Airport-bound traffic",
    trafficEstimate: "~30,000 vehicles/day",
    pricePerWeek: 150000,
    images: ["/images/billboard-card-4.jpg"],
    verifiedOwner: true,
    description:
      "Well-lit static billboard along Airport Road, capturing consistent traffic to and from Port Harcourt International Airport, plus surrounding business districts.",
    rating: 4.6,
    reviewCount: 9,
  },
];

export function getBillboardById(id: string) {
  return MOCK_BILLBOARDS.find((b) => b.id === id);
}

export function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
