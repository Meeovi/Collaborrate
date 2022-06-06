import { Prisma } from "@prisma/client";
export declare class Source {
    id: number;
    name: string;
    code: number;
    enabled?: boolean | null;
    description?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    pickup_location?: boolean | null;
    contact_name?: string | null;
    email?: string | null;
    phone?: Prisma.Decimal | null;
    fax?: Prisma.Decimal | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    street?: string | null;
    postcode?: Prisma.Decimal | null;
}
