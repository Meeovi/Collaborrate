import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStatesArgs } from "./args/DeleteManyStatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStatesResolver {
    deleteManyStates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStatesArgs): Promise<AffectedRowsOutput>;
}
