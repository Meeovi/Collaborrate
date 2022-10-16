import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomizationsArgs } from "./args/FindManyCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class FindManyCustomizationsResolver {
    findManyCustomizations(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomizationsArgs): Promise<Customizations[]>;
}
