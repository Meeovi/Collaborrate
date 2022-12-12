"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RolesMaxOrderByAggregateInput = class RolesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMaxOrderByAggregateInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMaxOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMaxOrderByAggregateInput.prototype, "created_at", void 0);
RolesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], RolesMaxOrderByAggregateInput);
exports.RolesMaxOrderByAggregateInput = RolesMaxOrderByAggregateInput;
