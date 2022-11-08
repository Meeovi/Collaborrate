import { GraphQLResolveInfo } from "graphql";
import { FindUniquePartnersArgs } from "./args/FindUniquePartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class FindUniquePartnersResolver {
    findUniquePartners(ctx: any, info: GraphQLResolveInfo, args: FindUniquePartnersArgs): Promise<Partners | null>;
}
