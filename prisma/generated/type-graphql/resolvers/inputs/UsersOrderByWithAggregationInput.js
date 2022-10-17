"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsersAvgOrderByAggregateInput_1 = require("../inputs/UsersAvgOrderByAggregateInput");
const UsersCountOrderByAggregateInput_1 = require("../inputs/UsersCountOrderByAggregateInput");
const UsersMaxOrderByAggregateInput_1 = require("../inputs/UsersMaxOrderByAggregateInput");
const UsersMinOrderByAggregateInput_1 = require("../inputs/UsersMinOrderByAggregateInput");
const UsersSumOrderByAggregateInput_1 = require("../inputs/UsersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UsersOrderByWithAggregationInput = class UsersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "interface_locale", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "messages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByWithAggregationInput.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCountOrderByAggregateInput_1.UsersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCountOrderByAggregateInput_1.UsersCountOrderByAggregateInput)
], UsersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersAvgOrderByAggregateInput_1.UsersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersAvgOrderByAggregateInput_1.UsersAvgOrderByAggregateInput)
], UsersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersMaxOrderByAggregateInput_1.UsersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersMaxOrderByAggregateInput_1.UsersMaxOrderByAggregateInput)
], UsersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersMinOrderByAggregateInput_1.UsersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersMinOrderByAggregateInput_1.UsersMinOrderByAggregateInput)
], UsersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersSumOrderByAggregateInput_1.UsersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersSumOrderByAggregateInput_1.UsersSumOrderByAggregateInput)
], UsersOrderByWithAggregationInput.prototype, "_sum", void 0);
UsersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersOrderByWithAggregationInput", {
        isAbstract: true
    })
], UsersOrderByWithAggregationInput);
exports.UsersOrderByWithAggregationInput = UsersOrderByWithAggregationInput;
