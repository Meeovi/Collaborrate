import { NestedStringFilter } from "../inputs/NestedStringFilter";
export declare class StringFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    contains?: string | undefined;
    startsWith?: string | undefined;
    endsWith?: string | undefined;
    mode?: "default" | "insensitive" | undefined;
    not?: NestedStringFilter | undefined;
}
