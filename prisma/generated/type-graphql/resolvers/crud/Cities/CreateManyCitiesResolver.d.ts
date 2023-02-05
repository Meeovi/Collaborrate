import { GraphQLResolveInfo } from "graphql";
import { CreateManyCitiesArgs } from "./args/CreateManyCitiesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCitiesResolver {
    createManyCities(ctx: any, info: GraphQLResolveInfo, args: CreateManyCitiesArgs): Promise<AffectedRowsOutput>;
}
