import { GraphQLResolveInfo } from "graphql";
import { FindManyDigiboardArgs } from "./args/FindManyDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class FindManyDigiboardResolver {
    digiboards(ctx: any, info: GraphQLResolveInfo, args: FindManyDigiboardArgs): Promise<Digiboard[]>;
}
