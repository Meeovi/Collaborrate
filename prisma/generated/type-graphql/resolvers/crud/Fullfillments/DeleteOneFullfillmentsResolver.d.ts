import { GraphQLResolveInfo } from "graphql";
import { DeleteOneFullfillmentsArgs } from "./args/DeleteOneFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class DeleteOneFullfillmentsResolver {
    deleteOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFullfillmentsArgs): Promise<Fullfillments | null>;
}
