import { Prisma } from "@prisma/client";
export declare class SourceCreateInput {
    name: string;
    code?: number | undefined;
    enabled?: boolean | undefined;
    description?: string | undefined;
    latitude?: string | undefined;
    longitude?: string | undefined;
    pickup_location?: boolean | undefined;
    contact_name?: string | undefined;
    email?: string | undefined;
    phone?: Prisma.Decimal | undefined;
    fax?: Prisma.Decimal | undefined;
    country?: string | undefined;
    state?: string | undefined;
    city?: string | undefined;
    street?: string | undefined;
    postcode?: Prisma.Decimal | undefined;
}
