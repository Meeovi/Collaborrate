import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProduct_typesArgs } from "./args/UpdateManyProduct_typesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProduct_typesResolver {
    updateManyProduct_types(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProduct_typesArgs): Promise<AffectedRowsOutput>;
}
