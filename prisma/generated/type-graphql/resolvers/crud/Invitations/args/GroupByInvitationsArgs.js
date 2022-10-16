"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInvitationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsOrderByWithAggregationInput_1 = require("../../../inputs/InvitationsOrderByWithAggregationInput");
const InvitationsScalarWhereWithAggregatesInput_1 = require("../../../inputs/InvitationsScalarWhereWithAggregatesInput");
const InvitationsWhereInput_1 = require("../../../inputs/InvitationsWhereInput");
const InvitationsScalarFieldEnum_1 = require("../../../../enums/InvitationsScalarFieldEnum");
let GroupByInvitationsArgs = class GroupByInvitationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsWhereInput_1.InvitationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsWhereInput_1.InvitationsWhereInput)
], GroupByInvitationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvitationsOrderByWithAggregationInput_1.InvitationsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInvitationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvitationsScalarFieldEnum_1.InvitationsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInvitationsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsScalarWhereWithAggregatesInput_1.InvitationsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsScalarWhereWithAggregatesInput_1.InvitationsScalarWhereWithAggregatesInput)
], GroupByInvitationsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInvitationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInvitationsArgs.prototype, "skip", void 0);
GroupByInvitationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInvitationsArgs);
exports.GroupByInvitationsArgs = GroupByInvitationsArgs;
