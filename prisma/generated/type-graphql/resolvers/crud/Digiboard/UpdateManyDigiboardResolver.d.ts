import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDigiboardArgs } from "./args/UpdateManyDigiboardArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDigiboardResolver {
    updateManyDigiboard(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDigiboardArgs): Promise<AffectedRowsOutput>;
}
