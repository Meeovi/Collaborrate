import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProvidersOrThrowArgs } from "./args/FindUniqueProvidersOrThrowArgs";
import { Providers } from "../../../models/Providers";
export declare class FindUniqueProvidersOrThrowResolver {
    findUniqueProvidersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProvidersOrThrowArgs): Promise<Providers | null>;
}
