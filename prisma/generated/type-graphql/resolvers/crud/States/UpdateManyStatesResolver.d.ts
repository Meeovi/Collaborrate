import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStatesArgs } from "./args/UpdateManyStatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStatesResolver {
    updateManyStates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStatesArgs): Promise<AffectedRowsOutput>;
}
