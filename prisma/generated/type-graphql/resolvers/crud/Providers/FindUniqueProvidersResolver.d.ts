import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProvidersArgs } from "./args/FindUniqueProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class FindUniqueProvidersResolver {
    findUniqueProviders(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProvidersArgs): Promise<Providers | null>;
}
