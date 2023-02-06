import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProvidersArgs } from "./args/DeleteOneProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class DeleteOneProvidersResolver {
    deleteOneProviders(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProvidersArgs): Promise<Providers | null>;
}
