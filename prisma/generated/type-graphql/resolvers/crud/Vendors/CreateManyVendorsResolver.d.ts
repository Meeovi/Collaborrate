import { GraphQLResolveInfo } from "graphql";
import { CreateManyVendorsArgs } from "./args/CreateManyVendorsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVendorsResolver {
    createManyVendors(ctx: any, info: GraphQLResolveInfo, args: CreateManyVendorsArgs): Promise<AffectedRowsOutput>;
}
