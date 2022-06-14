import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsOrderByWithRelationInput } from "../../../inputs/CustomizationsOrderByWithRelationInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsWhereInput, {
    nullable: true
  })
  where?: CustomizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomizationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustomizationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomizationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
