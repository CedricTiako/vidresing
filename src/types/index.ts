export interface User {
  id: string;
  email: string;
  role: 'seller' | 'professional' | 'admin';
  name?: string;
  address?: string;
  phone?: string;
  created_at: string;
}

export interface Collection {
  id: string;
  user_id: string;
  status: 'pending' | 'estimated' | 'accepted' | 'rejected' | 'completed';
  location: string;
  items: CollectionItem[];
  created_at: string;
}

export interface CollectionItem {
  id: string;
  collection_id: string;
  brand: string;
  category: string;
  description: string;
  estimated_price: number;
  final_price?: number;
  status: 'pending' | 'listed' | 'sold';
  images: string[];
}