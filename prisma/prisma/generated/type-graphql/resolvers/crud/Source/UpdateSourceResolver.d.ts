import { GraphQLResolveInfo } from "graphql";
import { UpdateSourceArgs } from "./args/UpdateSourceArgs";
import { Source } from "../../../models/Source";
export declare class UpdateSourceResolver {
    updateSource(ctx: any, info: GraphQLResolveInfo, args: UpdateSourceArgs): Promise<Source | null>;
}
