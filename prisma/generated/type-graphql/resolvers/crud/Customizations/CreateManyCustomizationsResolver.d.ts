import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomizationsArgs } from "./args/CreateManyCustomizationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomizationsResolver {
    createManyCustomizations(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomizationsArgs): Promise<AffectedRowsOutput>;
}
