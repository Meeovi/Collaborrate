import { GraphQLResolveInfo } from "graphql";
import { FindFirstProvidersOrThrowArgs } from "./args/FindFirstProvidersOrThrowArgs";
import { Providers } from "../../../models/Providers";
export declare class FindFirstProvidersOrThrowResolver {
    findFirstProvidersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProvidersOrThrowArgs): Promise<Providers | null>;
}
