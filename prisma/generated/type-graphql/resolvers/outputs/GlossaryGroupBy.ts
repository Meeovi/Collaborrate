import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlossaryAvgAggregate } from "../outputs/GlossaryAvgAggregate";
import { GlossaryCountAggregate } from "../outputs/GlossaryCountAggregate";
import { GlossaryMaxAggregate } from "../outputs/GlossaryMaxAggregate";
import { GlossaryMinAggregate } from "../outputs/GlossaryMinAggregate";
import { GlossarySumAggregate } from "../outputs/GlossarySumAggregate";

@TypeGraphQL.ObjectType("GlossaryGroupBy", {
  isAbstract: true
})
export class GlossaryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published!: Date | null;

  @TypeGraphQL.Field(_type => GlossaryCountAggregate, {
    nullable: true
  })
  _count!: GlossaryCountAggregate | null;

  @TypeGraphQL.Field(_type => GlossaryAvgAggregate, {
    nullable: true
  })
  _avg!: GlossaryAvgAggregate | null;

  @TypeGraphQL.Field(_type => GlossarySumAggregate, {
    nullable: true
  })
  _sum!: GlossarySumAggregate | null;

  @TypeGraphQL.Field(_type => GlossaryMinAggregate, {
    nullable: true
  })
  _min!: GlossaryMinAggregate | null;

  @TypeGraphQL.Field(_type => GlossaryMaxAggregate, {
    nullable: true
  })
  _max!: GlossaryMaxAggregate | null;
}
