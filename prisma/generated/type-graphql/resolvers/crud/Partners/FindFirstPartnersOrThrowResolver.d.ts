import { GraphQLResolveInfo } from "graphql";
import { FindFirstPartnersOrThrowArgs } from "./args/FindFirstPartnersOrThrowArgs";
import { Partners } from "../../../models/Partners";
export declare class FindFirstPartnersOrThrowResolver {
    findFirstPartnersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPartnersOrThrowArgs): Promise<Partners | null>;
}
