import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesOrderByWithRelationInput } from "../../../inputs/Gift_certificatesOrderByWithRelationInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";
import { Gift_certificatesScalarFieldEnum } from "../../../../enums/Gift_certificatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesWhereInput, {
    nullable: true
  })
  where?: Gift_certificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Gift_certificatesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Gift_certificatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Gift_certificatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type"> | undefined;
}
