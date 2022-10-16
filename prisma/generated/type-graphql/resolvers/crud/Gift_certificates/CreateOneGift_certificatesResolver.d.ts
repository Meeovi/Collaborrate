import { GraphQLResolveInfo } from "graphql";
import { CreateOneGift_certificatesArgs } from "./args/CreateOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class CreateOneGift_certificatesResolver {
    createOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateOneGift_certificatesArgs): Promise<Gift_certificates>;
}
