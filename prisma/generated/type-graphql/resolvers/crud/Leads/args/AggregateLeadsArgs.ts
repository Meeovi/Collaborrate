import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeadsOrderByWithRelationInput } from "../../../inputs/LeadsOrderByWithRelationInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLeadsArgs {
  @TypeGraphQL.Field(_type => LeadsWhereInput, {
    nullable: true
  })
  where?: LeadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LeadsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LeadsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LeadsWhereUniqueInput, {
    nullable: true
  })
  cursor?: LeadsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
