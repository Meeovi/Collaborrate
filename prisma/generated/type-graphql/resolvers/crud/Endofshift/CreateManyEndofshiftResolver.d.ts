import { GraphQLResolveInfo } from "graphql";
import { CreateManyEndofshiftArgs } from "./args/CreateManyEndofshiftArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEndofshiftResolver {
    createManyEndofshift(ctx: any, info: GraphQLResolveInfo, args: CreateManyEndofshiftArgs): Promise<AffectedRowsOutput>;
}
