import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCustomizationsArgs } from "./args/DeleteOneCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class DeleteOneCustomizationsResolver {
    deleteOneCustomizations(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCustomizationsArgs): Promise<Customizations | null>;
}
