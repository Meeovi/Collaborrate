import { GraphQLResolveInfo } from "graphql";
import { FindFirstAttributesArgs } from "./args/FindFirstAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class FindFirstAttributesResolver {
    findFirstAttributes(ctx: any, info: GraphQLResolveInfo, args: FindFirstAttributesArgs): Promise<Attributes | null>;
}
