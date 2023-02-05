import { GraphQLResolveInfo } from "graphql";
import { FindFirstAgreementsOrThrowArgs } from "./args/FindFirstAgreementsOrThrowArgs";
import { Agreements } from "../../../models/Agreements";
export declare class FindFirstAgreementsOrThrowResolver {
    findFirstAgreementsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAgreementsOrThrowArgs): Promise<Agreements | null>;
}
