"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesOrderByWithRelationInput_1 = require("../../../inputs/OpportunitiesOrderByWithRelationInput");
const OpportunitiesWhereInput_1 = require("../../../inputs/OpportunitiesWhereInput");
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
let AggregateOpportunitiesArgs = class AggregateOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereInput_1.OpportunitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereInput_1.OpportunitiesWhereInput)
], AggregateOpportunitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesOrderByWithRelationInput_1.OpportunitiesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateOpportunitiesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], AggregateOpportunitiesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOpportunitiesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOpportunitiesArgs.prototype, "skip", void 0);
AggregateOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateOpportunitiesArgs);
exports.AggregateOpportunitiesArgs = AggregateOpportunitiesArgs;
