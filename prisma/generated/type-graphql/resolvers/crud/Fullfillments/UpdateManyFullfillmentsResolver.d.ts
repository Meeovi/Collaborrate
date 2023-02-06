import { GraphQLResolveInfo } from "graphql";
import { UpdateManyFullfillmentsArgs } from "./args/UpdateManyFullfillmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFullfillmentsResolver {
    updateManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFullfillmentsArgs): Promise<AffectedRowsOutput>;
}
