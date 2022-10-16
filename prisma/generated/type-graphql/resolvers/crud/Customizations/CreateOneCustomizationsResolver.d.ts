import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomizationsArgs } from "./args/CreateOneCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class CreateOneCustomizationsResolver {
    createOneCustomizations(ctx: any, info: GraphQLResolveInfo, args: CreateOneCustomizationsArgs): Promise<Customizations>;
}
