import { GraphQLResolveInfo } from "graphql";
import { CreateManyStatesArgs } from "./args/CreateManyStatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyStatesResolver {
    createManyStates(ctx: any, info: GraphQLResolveInfo, args: CreateManyStatesArgs): Promise<AffectedRowsOutput>;
}
