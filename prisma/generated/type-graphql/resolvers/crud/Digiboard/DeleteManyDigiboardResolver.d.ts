import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDigiboardArgs } from "./args/DeleteManyDigiboardArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDigiboardResolver {
    deleteManyDigiboard(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDigiboardArgs): Promise<AffectedRowsOutput>;
}
