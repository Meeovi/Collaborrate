import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSegmentsOrThrowArgs } from "./args/FindUniqueSegmentsOrThrowArgs";
import { Segments } from "../../../models/Segments";
export declare class FindUniqueSegmentsOrThrowResolver {
    findUniqueSegmentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSegmentsOrThrowArgs): Promise<Segments | null>;
}
