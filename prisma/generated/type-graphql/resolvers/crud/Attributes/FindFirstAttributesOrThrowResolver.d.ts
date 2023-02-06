import { GraphQLResolveInfo } from "graphql";
import { FindFirstAttributesOrThrowArgs } from "./args/FindFirstAttributesOrThrowArgs";
import { Attributes } from "../../../models/Attributes";
export declare class FindFirstAttributesOrThrowResolver {
    findFirstAttributesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAttributesOrThrowArgs): Promise<Attributes | null>;
}
