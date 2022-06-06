import { GraphQLResolveInfo } from "graphql";
import { UpsertProvidersArgs } from "./args/UpsertProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class UpsertProvidersResolver {
    upsertProviders(ctx: any, info: GraphQLResolveInfo, args: UpsertProvidersArgs): Promise<Providers>;
}
