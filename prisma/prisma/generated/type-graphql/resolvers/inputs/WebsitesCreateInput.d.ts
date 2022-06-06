import { ThemesCreateNestedManyWithoutWebsitesInput } from "../inputs/ThemesCreateNestedManyWithoutWebsitesInput";
export declare class WebsitesCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    name?: string | undefined;
    url?: string | undefined;
    shop?: string | undefined;
    store?: string | undefined;
    themes?: ThemesCreateNestedManyWithoutWebsitesInput | undefined;
}
