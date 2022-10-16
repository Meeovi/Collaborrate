import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCustomizationsArgs } from "./args/UpsertOneCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
export declare class UpsertOneCustomizationsResolver {
    upsertOneCustomizations(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCustomizationsArgs): Promise<Customizations>;
}
