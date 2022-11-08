import { GraphQLResolveInfo } from "graphql";
import { CreateOneNewslettersArgs } from "./args/CreateOneNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class CreateOneNewslettersResolver {
    createOneNewsletters(ctx: any, info: GraphQLResolveInfo, args: CreateOneNewslettersArgs): Promise<Newsletters>;
}
