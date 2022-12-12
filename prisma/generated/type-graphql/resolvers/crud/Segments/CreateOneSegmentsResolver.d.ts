import { GraphQLResolveInfo } from "graphql";
import { CreateOneSegmentsArgs } from "./args/CreateOneSegmentsArgs";
import { Segments } from "../../../models/Segments";
export declare class CreateOneSegmentsResolver {
    createOneSegments(ctx: any, info: GraphQLResolveInfo, args: CreateOneSegmentsArgs): Promise<Segments>;
}
