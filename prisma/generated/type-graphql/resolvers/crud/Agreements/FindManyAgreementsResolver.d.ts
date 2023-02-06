import { GraphQLResolveInfo } from "graphql";
import { FindManyAgreementsArgs } from "./args/FindManyAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class FindManyAgreementsResolver {
    findManyAgreements(ctx: any, info: GraphQLResolveInfo, args: FindManyAgreementsArgs): Promise<Agreements[]>;
}
