"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionsMaxOrderByAggregateInput = class PermissionsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsMaxOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsMaxOrderByAggregateInput.prototype, "content", void 0);
PermissionsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], PermissionsMaxOrderByAggregateInput);
exports.PermissionsMaxOrderByAggregateInput = PermissionsMaxOrderByAggregateInput;
