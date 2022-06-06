import { GraphQLResolveInfo } from "graphql";
import { UpsertSourceArgs } from "./args/UpsertSourceArgs";
import { Source } from "../../../models/Source";
export declare class UpsertSourceResolver {
    upsertSource(ctx: any, info: GraphQLResolveInfo, args: UpsertSourceArgs): Promise<Source>;
}
