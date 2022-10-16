import { GraphQLResolveInfo } from "graphql";
import { UpdateManyGlossaryArgs } from "./args/UpdateManyGlossaryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyGlossaryResolver {
    updateManyGlossary(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGlossaryArgs): Promise<AffectedRowsOutput>;
}
