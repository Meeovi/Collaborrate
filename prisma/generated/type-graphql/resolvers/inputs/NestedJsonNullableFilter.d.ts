import { Prisma } from "@prisma/client";
export declare class NestedJsonNullableFilter {
    equals?: Prisma.InputJsonValue | undefined;
    path?: string[] | undefined;
    string_contains?: string | undefined;
    string_starts_with?: string | undefined;
    string_ends_with?: string | undefined;
    array_contains?: Prisma.InputJsonValue | undefined;
    array_starts_with?: Prisma.InputJsonValue | undefined;
    array_ends_with?: Prisma.InputJsonValue | undefined;
    lt?: Prisma.InputJsonValue | undefined;
    lte?: Prisma.InputJsonValue | undefined;
    gt?: Prisma.InputJsonValue | undefined;
    gte?: Prisma.InputJsonValue | undefined;
    not?: Prisma.InputJsonValue | undefined;
}
