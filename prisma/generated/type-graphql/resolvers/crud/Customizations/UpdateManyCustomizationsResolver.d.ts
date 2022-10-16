import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomizationsArgs } from "./args/UpdateManyCustomizationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomizationsResolver {
    updateManyCustomizations(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomizationsArgs): Promise<AffectedRowsOutput>;
}
