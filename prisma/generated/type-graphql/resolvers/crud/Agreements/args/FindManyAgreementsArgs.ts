import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsOrderByWithRelationInput } from "../../../inputs/AgreementsOrderByWithRelationInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";
import { AgreementsScalarFieldEnum } from "../../../../enums/AgreementsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  where?: AgreementsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AgreementsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AgreementsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AgreementsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AgreementsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "reference_id" | "created" | "updated" | "content" | "name" | "image" | "excerpt" | "type" | "user_id" | "shop_id"> | undefined;
}
