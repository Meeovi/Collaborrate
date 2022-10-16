import { GraphQLResolveInfo } from "graphql";
import { FindFirstNewslettersArgs } from "./args/FindFirstNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class FindFirstNewslettersResolver {
    findFirstNewsletters(ctx: any, info: GraphQLResolveInfo, args: FindFirstNewslettersArgs): Promise<Newsletters | null>;
}
