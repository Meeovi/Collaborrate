import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAttributesArgs } from "./args/FindUniqueAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class FindUniqueAttributesResolver {
    findUniqueAttributes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAttributesArgs): Promise<Attributes | null>;
}
