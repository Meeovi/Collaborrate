import { GraphQLResolveInfo } from "graphql";
import { CreateGift_certificatesArgs } from "./args/CreateGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class CreateGift_certificatesResolver {
    createGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateGift_certificatesArgs): Promise<Gift_certificates>;
}
