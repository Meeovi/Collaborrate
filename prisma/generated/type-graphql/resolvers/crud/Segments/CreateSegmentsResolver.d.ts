import { GraphQLResolveInfo } from "graphql";
import { CreateSegmentsArgs } from "./args/CreateSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class CreateSegmentsResolver {
    createSegments(ctx: any, info: GraphQLResolveInfo, args: CreateSegmentsArgs): Promise<Segments>;
}
