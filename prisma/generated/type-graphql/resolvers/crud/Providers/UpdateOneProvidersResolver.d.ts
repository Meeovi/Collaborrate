import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProvidersArgs } from "./args/UpdateOneProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class UpdateOneProvidersResolver {
    updateOneProviders(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProvidersArgs): Promise<Providers | null>;
}
