import { GraphQLResolveInfo } from "graphql";
import { CreateSourceArgs } from "./args/CreateSourceArgs";
import { Source } from "../../../models/Source";
export declare class CreateSourceResolver {
    createSource(ctx: any, info: GraphQLResolveInfo, args: CreateSourceArgs): Promise<Source>;
}
