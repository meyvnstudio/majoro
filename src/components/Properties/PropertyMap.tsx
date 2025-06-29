import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Property } from "../../types";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface PropertyMapProps {
  properties: Property[];
  selectedProperty?: Property | null;
  onPropertyHover?: (property: Property | null) => void;
}

export default function PropertyMap({
  properties,
  selectedProperty,
  onPropertyHover,
}: PropertyMapProps) {
  const mapRef = useRef<L.Map>(null);

  // Default center on New York
  const defaultCenter: [number, number] = [40.7128, -74.006];

  useEffect(() => {
    if (selectedProperty && mapRef.current) {
      const { lat, lng } = selectedProperty.location.coordinates;
      mapRef.current.setView([lat, lng], 15);
    }
  }, [selectedProperty]);

  const createCustomIcon = (property: Property) => {
    const price = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(property.price);

    const isSelected = selectedProperty?.id === property.id;

    return L.divIcon({
      html: `
        <div class="custom-marker ${isSelected ? "selected" : ""}" 
             onmouseenter="window.handleMapMarkerHover('${property.id}')"
             onmouseleave="window.handleMapMarkerLeave()">
          <div class="marker-content">
            <span class="price">${price}</span>
          </div>
        </div>
      `,
      className: "custom-div-icon",
      iconSize: [80, 40],
      iconAnchor: [40, 40],
    });
  };

  // Set up global handlers for map marker hover
  useEffect(() => {
    (window as any).handleMapMarkerHover = (propertyId: string) => {
      const property = properties.find((p) => p.id === propertyId);
      if (property && onPropertyHover) {
        onPropertyHover(property);
      }
    };

    (window as any).handleMapMarkerLeave = () => {
      if (onPropertyHover) {
        onPropertyHover(null);
      }
    };

    return () => {
      delete (window as any).handleMapMarkerHover;
      delete (window as any).handleMapMarkerLeave;
    };
  }, [properties, onPropertyHover]);

  return (
    <div className="h-full w-full relative">
      <style>
        {`
          .custom-marker {
            background: white;
            border: 2px solid #3b82f6;
            border-radius: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .custom-marker:hover,
          .custom-marker.selected {
            background: #3b82f6;
            transform: scale(1.1);
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          }
          
          .custom-marker:hover .price,
          .custom-marker.selected .price {
            color: white;
          }
          
          .marker-content {
            padding: 8px 12px;
            text-align: center;
          }
          
          .price {
            font-size: 12px;
            font-weight: 600;
            color: #3b82f6;
            white-space: nowrap;
          }
          
          .custom-div-icon {
            background: transparent !important;
            border: none !important;
          }
        `}
      </style>

      <MapContainer
        center={defaultCenter}
        zoom={11}
        className="h-full w-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[
              property.location.coordinates.lat,
              property.location.coordinates.lng,
            ]}
            icon={createCustomIcon(property)}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h3 className="font-semibold text-sm mb-1">{property.title}</h3>
                <p className="text-xs text-gray-600 mb-2">
                  {property.location.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                    {property.priceType === "rent" && "/mo"}
                  </span>
                  <span className="text-xs text-gray-500">
                    {property.beds}bd • {property.baths}ba
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
