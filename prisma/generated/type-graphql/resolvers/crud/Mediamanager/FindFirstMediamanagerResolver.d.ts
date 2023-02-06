import { GraphQLResolveInfo } from "graphql";
import { FindFirstMediamanagerArgs } from "./args/FindFirstMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class FindFirstMediamanagerResolver {
    findFirstMediamanager(ctx: any, info: GraphQLResolveInfo, args: FindFirstMediamanagerArgs): Promise<Mediamanager | null>;
}
