import { GraphQLResolveInfo } from "graphql";
import { FindFirstAgreementsArgs } from "./args/FindFirstAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class FindFirstAgreementsResolver {
    findFirstAgreements(ctx: any, info: GraphQLResolveInfo, args: FindFirstAgreementsArgs): Promise<Agreements | null>;
}
