export interface Cars {
    id: string; 
    name: string; 
    brand: string; 
    type: string; 
    fuelCapacity: string;
    transmission: string; 
    seatingCapacity: string; 
    pricePerDay: number; 
    originalPrice?: number; 
    tags?: string[]; 
    image: {
      asset: {
        _ref: string; 
        _type: "reference";
      };
    };
  }
  

    
