import { GraphQLResolveInfo } from "graphql";
import { FindFirstPartnersArgs } from "./args/FindFirstPartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class FindFirstPartnersResolver {
    findFirstPartners(ctx: any, info: GraphQLResolveInfo, args: FindFirstPartnersArgs): Promise<Partners | null>;
}
