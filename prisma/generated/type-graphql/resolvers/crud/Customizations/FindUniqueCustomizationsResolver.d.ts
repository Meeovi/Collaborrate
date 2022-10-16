import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomizationsArgs } from "./args/FindUniqueCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class FindUniqueCustomizationsResolver {
    findUniqueCustomizations(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomizationsArgs): Promise<Customizations | null>;
}
