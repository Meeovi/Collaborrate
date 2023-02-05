import { GraphQLResolveInfo } from "graphql";
import { UpdateOneFullfillmentsArgs } from "./args/UpdateOneFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class UpdateOneFullfillmentsResolver {
    updateOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFullfillmentsArgs): Promise<Fullfillments | null>;
}
