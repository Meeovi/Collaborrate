import { GraphQLResolveInfo } from "graphql";
import { DeleteManyGlossaryArgs } from "./args/DeleteManyGlossaryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyGlossaryResolver {
    deleteManyGlossary(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGlossaryArgs): Promise<AffectedRowsOutput>;
}
