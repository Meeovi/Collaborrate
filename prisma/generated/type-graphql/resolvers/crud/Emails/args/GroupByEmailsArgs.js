"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsOrderByWithAggregationInput_1 = require("../../../inputs/EmailsOrderByWithAggregationInput");
const EmailsScalarWhereWithAggregatesInput_1 = require("../../../inputs/EmailsScalarWhereWithAggregatesInput");
const EmailsWhereInput_1 = require("../../../inputs/EmailsWhereInput");
const EmailsScalarFieldEnum_1 = require("../../../../enums/EmailsScalarFieldEnum");
let GroupByEmailsArgs = class GroupByEmailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], GroupByEmailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsOrderByWithAggregationInput_1.EmailsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmailsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsScalarFieldEnum_1.EmailsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmailsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsScalarWhereWithAggregatesInput_1.EmailsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsScalarWhereWithAggregatesInput_1.EmailsScalarWhereWithAggregatesInput)
], GroupByEmailsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmailsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmailsArgs.prototype, "skip", void 0);
GroupByEmailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEmailsArgs);
exports.GroupByEmailsArgs = GroupByEmailsArgs;
