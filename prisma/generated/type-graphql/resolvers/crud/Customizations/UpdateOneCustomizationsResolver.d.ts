import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomizationsArgs } from "./args/UpdateOneCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class UpdateOneCustomizationsResolver {
    updateOneCustomizations(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCustomizationsArgs): Promise<Customizations | null>;
}
