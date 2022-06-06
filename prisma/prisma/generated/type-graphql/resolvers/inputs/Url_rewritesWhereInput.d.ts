import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Url_rewritesWhereInput {
    AND?: Url_rewritesWhereInput[] | undefined;
    OR?: Url_rewritesWhereInput[] | undefined;
    NOT?: Url_rewritesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    request_path?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    redirect_type?: BoolNullableFilter | undefined;
    target_path?: StringNullableFilter | undefined;
    store?: StringNullableFilter | undefined;
}
