import { GraphQLResolveInfo } from "graphql";
import { CreateManyFullfillmentsArgs } from "./args/CreateManyFullfillmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFullfillmentsResolver {
    createManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: CreateManyFullfillmentsArgs): Promise<AffectedRowsOutput>;
}
