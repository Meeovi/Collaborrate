import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSegmentsArgs } from "./args/FindUniqueSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class FindUniqueSegmentsResolver {
    findUniqueSegments(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSegmentsArgs): Promise<Segments | null>;
}
