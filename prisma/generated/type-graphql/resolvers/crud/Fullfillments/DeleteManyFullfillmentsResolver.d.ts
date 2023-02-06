import { GraphQLResolveInfo } from "graphql";
import { DeleteManyFullfillmentsArgs } from "./args/DeleteManyFullfillmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFullfillmentsResolver {
    deleteManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFullfillmentsArgs): Promise<AffectedRowsOutput>;
}
