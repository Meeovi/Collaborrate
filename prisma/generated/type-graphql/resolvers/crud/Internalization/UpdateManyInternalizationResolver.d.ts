import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInternalizationArgs } from "./args/UpdateManyInternalizationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInternalizationResolver {
    updateManyInternalization(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInternalizationArgs): Promise<AffectedRowsOutput>;
}
