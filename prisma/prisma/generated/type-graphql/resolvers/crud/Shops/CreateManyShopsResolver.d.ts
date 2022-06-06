import { GraphQLResolveInfo } from "graphql";
import { CreateManyShopsArgs } from "./args/CreateManyShopsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyShopsResolver {
    createManyShops(ctx: any, info: GraphQLResolveInfo, args: CreateManyShopsArgs): Promise<AffectedRowsOutput>;
}
