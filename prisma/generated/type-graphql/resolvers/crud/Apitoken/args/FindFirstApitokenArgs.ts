import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenOrderByWithRelationInput } from "../../../inputs/ApitokenOrderByWithRelationInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";
import { ApitokenScalarFieldEnum } from "../../../../enums/ApitokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenWhereInput, {
    nullable: true
  })
  where?: ApitokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApitokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ApitokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ApitokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: ApitokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ApitokenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "token_type" | "description" | "token"> | undefined;
}
