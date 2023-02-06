import { GraphQLResolveInfo } from "graphql";
import { CreateOnePartnersArgs } from "./args/CreateOnePartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class CreateOnePartnersResolver {
    createOnePartners(ctx: any, info: GraphQLResolveInfo, args: CreateOnePartnersArgs): Promise<Partners>;
}
