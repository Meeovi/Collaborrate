import { GraphQLResolveInfo } from "graphql";
import { FindUniquePartnersOrThrowArgs } from "./args/FindUniquePartnersOrThrowArgs";
import { Partners } from "../../../models/Partners";
export declare class FindUniquePartnersOrThrowResolver {
    findUniquePartnersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniquePartnersOrThrowArgs): Promise<Partners | null>;
}
