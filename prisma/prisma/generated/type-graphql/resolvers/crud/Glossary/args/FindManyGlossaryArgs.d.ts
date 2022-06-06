import { GlossaryOrderByWithRelationInput } from "../../../inputs/GlossaryOrderByWithRelationInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";
export declare class FindManyGlossaryArgs {
    where?: GlossaryWhereInput | undefined;
    orderBy?: GlossaryOrderByWithRelationInput[] | undefined;
    cursor?: GlossaryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "content" | "image" | "published"> | undefined;
}
