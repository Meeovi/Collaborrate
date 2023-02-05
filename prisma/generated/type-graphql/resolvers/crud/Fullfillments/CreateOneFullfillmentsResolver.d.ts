import { GraphQLResolveInfo } from "graphql";
import { CreateOneFullfillmentsArgs } from "./args/CreateOneFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class CreateOneFullfillmentsResolver {
    createOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: CreateOneFullfillmentsArgs): Promise<Fullfillments>;
}
