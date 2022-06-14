import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsOrderByWithRelationInput } from "../../../inputs/ReportsOrderByWithRelationInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";
import { ReportsScalarFieldEnum } from "../../../../enums/ReportsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyReportsArgs {
  @TypeGraphQL.Field(_type => ReportsWhereInput, {
    nullable: true
  })
  where?: ReportsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReportsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReportsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReportsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReportsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer" | "email" | "products" | "quantity" | "subtotal" | "applied_coupon" | "created" | "updated" | "ip_address"> | undefined;
}
