import { GraphQLResolveInfo } from "graphql";
import { FindFirstNewslettersOrThrowArgs } from "./args/FindFirstNewslettersOrThrowArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class FindFirstNewslettersOrThrowResolver {
    findFirstNewslettersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstNewslettersOrThrowArgs): Promise<Newsletters | null>;
}
