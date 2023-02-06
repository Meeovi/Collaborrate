import { GraphQLResolveInfo } from "graphql";
import { FindFirstProvidersArgs } from "./args/FindFirstProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class FindFirstProvidersResolver {
    findFirstProviders(ctx: any, info: GraphQLResolveInfo, args: FindFirstProvidersArgs): Promise<Providers | null>;
}
