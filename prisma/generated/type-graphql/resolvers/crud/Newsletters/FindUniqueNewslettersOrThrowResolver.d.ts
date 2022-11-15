import { GraphQLResolveInfo } from "graphql";
import { FindUniqueNewslettersOrThrowArgs } from "./args/FindUniqueNewslettersOrThrowArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class FindUniqueNewslettersOrThrowResolver {
    findUniqueNewslettersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNewslettersOrThrowArgs): Promise<Newsletters | null>;
}
