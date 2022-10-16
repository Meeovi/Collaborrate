import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCasesArgs } from "./args/UpdateManyCasesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCasesResolver {
    updateManyCases(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCasesArgs): Promise<AffectedRowsOutput>;
}
