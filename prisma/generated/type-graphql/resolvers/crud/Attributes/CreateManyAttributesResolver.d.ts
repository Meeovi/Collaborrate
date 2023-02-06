import { GraphQLResolveInfo } from "graphql";
import { CreateManyAttributesArgs } from "./args/CreateManyAttributesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAttributesResolver {
    createManyAttributes(ctx: any, info: GraphQLResolveInfo, args: CreateManyAttributesArgs): Promise<AffectedRowsOutput>;
}
