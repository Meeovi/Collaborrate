"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesOrderByWithAggregationInput_1 = require("../../../inputs/Email_templatesOrderByWithAggregationInput");
const Email_templatesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Email_templatesScalarWhereWithAggregatesInput");
const Email_templatesWhereInput_1 = require("../../../inputs/Email_templatesWhereInput");
const Email_templatesScalarFieldEnum_1 = require("../../../../enums/Email_templatesScalarFieldEnum");
let GroupByEmail_templatesArgs = class GroupByEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereInput_1.Email_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereInput_1.Email_templatesWhereInput)
], GroupByEmail_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesOrderByWithAggregationInput_1.Email_templatesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmail_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesScalarFieldEnum_1.Email_templatesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmail_templatesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesScalarWhereWithAggregatesInput_1.Email_templatesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesScalarWhereWithAggregatesInput_1.Email_templatesScalarWhereWithAggregatesInput)
], GroupByEmail_templatesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmail_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmail_templatesArgs.prototype, "skip", void 0);
GroupByEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEmail_templatesArgs);
exports.GroupByEmail_templatesArgs = GroupByEmail_templatesArgs;
