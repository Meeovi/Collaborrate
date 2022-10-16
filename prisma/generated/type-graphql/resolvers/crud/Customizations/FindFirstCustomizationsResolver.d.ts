import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomizationsArgs } from "./args/FindFirstCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class FindFirstCustomizationsResolver {
    findFirstCustomizations(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomizationsArgs): Promise<Customizations | null>;
}
