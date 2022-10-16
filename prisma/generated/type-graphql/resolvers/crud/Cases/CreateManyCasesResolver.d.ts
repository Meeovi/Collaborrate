import { GraphQLResolveInfo } from "graphql";
import { CreateManyCasesArgs } from "./args/CreateManyCasesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCasesResolver {
    createManyCases(ctx: any, info: GraphQLResolveInfo, args: CreateManyCasesArgs): Promise<AffectedRowsOutput>;
}
