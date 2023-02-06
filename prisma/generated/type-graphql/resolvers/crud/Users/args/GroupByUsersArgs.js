"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUsersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersOrderByWithAggregationInput_1 = require("../../../inputs/UsersOrderByWithAggregationInput");
const UsersScalarWhereWithAggregatesInput_1 = require("../../../inputs/UsersScalarWhereWithAggregatesInput");
const UsersWhereInput_1 = require("../../../inputs/UsersWhereInput");
const UsersScalarFieldEnum_1 = require("../../../../enums/UsersScalarFieldEnum");
let GroupByUsersArgs = class GroupByUsersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersWhereInput_1.UsersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersWhereInput_1.UsersWhereInput)
], GroupByUsersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersOrderByWithAggregationInput_1.UsersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUsersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersScalarFieldEnum_1.UsersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUsersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersScalarWhereWithAggregatesInput_1.UsersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersScalarWhereWithAggregatesInput_1.UsersScalarWhereWithAggregatesInput)
], GroupByUsersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUsersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUsersArgs.prototype, "skip", void 0);
GroupByUsersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUsersArgs);
exports.GroupByUsersArgs = GroupByUsersArgs;
