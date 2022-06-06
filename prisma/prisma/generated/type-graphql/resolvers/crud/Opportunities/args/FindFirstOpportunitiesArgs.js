"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesOrderByWithRelationInput_1 = require("../../../inputs/OpportunitiesOrderByWithRelationInput");
const OpportunitiesWhereInput_1 = require("../../../inputs/OpportunitiesWhereInput");
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
const OpportunitiesScalarFieldEnum_1 = require("../../../../enums/OpportunitiesScalarFieldEnum");
let FindFirstOpportunitiesArgs = class FindFirstOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereInput_1.OpportunitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereInput_1.OpportunitiesWhereInput)
], FindFirstOpportunitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesOrderByWithRelationInput_1.OpportunitiesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOpportunitiesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], FindFirstOpportunitiesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOpportunitiesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOpportunitiesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesScalarFieldEnum_1.OpportunitiesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOpportunitiesArgs.prototype, "distinct", void 0);
FindFirstOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstOpportunitiesArgs);
exports.FindFirstOpportunitiesArgs = FindFirstOpportunitiesArgs;
