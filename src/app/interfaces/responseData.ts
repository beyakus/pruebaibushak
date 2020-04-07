export interface ResponseData {
  site_id: string;
  paging: Paging;
  results: Result[];
  secondary_results: [];
  related_results: [];
  sort: Sort;
  available_sorts: [];
  filters: [];
  available_filters: any;
}

export interface Paging {
  total: number;
  offset: number;
  limit: number;
  primary_results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: any;
  differential_pricing: { id: 19568774 };
  original_price: any;
  category_id: string;
  official_store_id: number;
  catalog_product_id: string;
  tags: any;
  catalog_listing: boolean;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: [];
  logistic_type: string;
  store_pick_up: boolean;
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: GenericData;
  state: GenericData;
  city: GenericData;
  latitude: string;
  longitude: string;
}

export interface GenericData {
  id: string;
  name: string;
}

export interface Seller {
  id: number;
  permalink: any;
  power_seller_status: any;
  car_dealer: boolean;
  real_estate_agency: boolean;
}
