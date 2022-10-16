import { GraphQLResolveInfo } from "graphql";
import { FindUniqueNewslettersArgs } from "./args/FindUniqueNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class FindUniqueNewslettersResolver {
    findUniqueNewsletters(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNewslettersArgs): Promise<Newsletters | null>;
}
