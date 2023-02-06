import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProvidersArgs } from "./args/UpsertOneProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class UpsertOneProvidersResolver {
    upsertOneProviders(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProvidersArgs): Promise<Providers>;
}
