import { GraphQLResolveInfo } from "graphql";
import { FindManyNewslettersArgs } from "./args/FindManyNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class FindManyNewslettersResolver {
    findManyNewsletters(ctx: any, info: GraphQLResolveInfo, args: FindManyNewslettersArgs): Promise<Newsletters[]>;
}
