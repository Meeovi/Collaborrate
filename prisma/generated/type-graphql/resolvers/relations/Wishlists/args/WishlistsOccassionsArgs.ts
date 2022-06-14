import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsOrderByWithRelationInput } from "../../../inputs/OccassionsOrderByWithRelationInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";
import { OccassionsScalarFieldEnum } from "../../../../enums/OccassionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class WishlistsOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  where?: OccassionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OccassionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OccassionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: OccassionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OccassionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "code" | "name" | "category" | "tags" | "description" | "products" | "wishlists"> | undefined;
}
