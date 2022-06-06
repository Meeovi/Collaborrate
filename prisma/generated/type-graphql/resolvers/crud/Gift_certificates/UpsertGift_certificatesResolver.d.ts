import { GraphQLResolveInfo } from "graphql";
import { UpsertGift_certificatesArgs } from "./args/UpsertGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class UpsertGift_certificatesResolver {
    upsertGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpsertGift_certificatesArgs): Promise<Gift_certificates>;
}
