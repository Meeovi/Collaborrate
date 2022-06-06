import { GraphQLResolveInfo } from "graphql";
import { CreateFullfillmentsArgs } from "./args/CreateFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class CreateFullfillmentsResolver {
    createFullfillments(ctx: any, info: GraphQLResolveInfo, args: CreateFullfillmentsArgs): Promise<Fullfillments>;
}
