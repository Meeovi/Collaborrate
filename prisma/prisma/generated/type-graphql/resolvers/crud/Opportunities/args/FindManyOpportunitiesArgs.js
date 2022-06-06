"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesOrderByWithRelationInput_1 = require("../../../inputs/OpportunitiesOrderByWithRelationInput");
const OpportunitiesWhereInput_1 = require("../../../inputs/OpportunitiesWhereInput");
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
const OpportunitiesScalarFieldEnum_1 = require("../../../../enums/OpportunitiesScalarFieldEnum");
let FindManyOpportunitiesArgs = class FindManyOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereInput_1.OpportunitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereInput_1.OpportunitiesWhereInput)
], FindManyOpportunitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesOrderByWithRelationInput_1.OpportunitiesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOpportunitiesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], FindManyOpportunitiesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOpportunitiesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOpportunitiesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesScalarFieldEnum_1.OpportunitiesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOpportunitiesArgs.prototype, "distinct", void 0);
FindManyOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyOpportunitiesArgs);
exports.FindManyOpportunitiesArgs = FindManyOpportunitiesArgs;
