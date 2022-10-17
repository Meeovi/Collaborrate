import { GraphQLResolveInfo } from "graphql";
import { FindManyPartnersArgs } from "./args/FindManyPartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class FindManyPartnersResolver {
    findManyPartners(ctx: any, info: GraphQLResolveInfo, args: FindManyPartnersArgs): Promise<Partners[]>;
}
