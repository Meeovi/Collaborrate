import { GraphQLResolveInfo } from "graphql";
import { CreateManyLeadsArgs } from "./args/CreateManyLeadsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLeadsResolver {
    createManyLeads(ctx: any, info: GraphQLResolveInfo, args: CreateManyLeadsArgs): Promise<AffectedRowsOutput>;
}
