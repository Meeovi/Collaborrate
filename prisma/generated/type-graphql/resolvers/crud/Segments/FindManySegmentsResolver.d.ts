import { GraphQLResolveInfo } from "graphql";
import { FindManySegmentsArgs } from "./args/FindManySegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class FindManySegmentsResolver {
    findManySegments(ctx: any, info: GraphQLResolveInfo, args: FindManySegmentsArgs): Promise<Segments[]>;
}
