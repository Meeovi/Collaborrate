"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsAvgOrderByAggregateInput_1 = require("../inputs/PermissionsAvgOrderByAggregateInput");
const PermissionsCountOrderByAggregateInput_1 = require("../inputs/PermissionsCountOrderByAggregateInput");
const PermissionsMaxOrderByAggregateInput_1 = require("../inputs/PermissionsMaxOrderByAggregateInput");
const PermissionsMinOrderByAggregateInput_1 = require("../inputs/PermissionsMinOrderByAggregateInput");
const PermissionsSumOrderByAggregateInput_1 = require("../inputs/PermissionsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionsOrderByWithAggregationInput = class PermissionsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "read", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsCountOrderByAggregateInput_1.PermissionsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsCountOrderByAggregateInput_1.PermissionsCountOrderByAggregateInput)
], PermissionsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsAvgOrderByAggregateInput_1.PermissionsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsAvgOrderByAggregateInput_1.PermissionsAvgOrderByAggregateInput)
], PermissionsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsMaxOrderByAggregateInput_1.PermissionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsMaxOrderByAggregateInput_1.PermissionsMaxOrderByAggregateInput)
], PermissionsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsMinOrderByAggregateInput_1.PermissionsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsMinOrderByAggregateInput_1.PermissionsMinOrderByAggregateInput)
], PermissionsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsSumOrderByAggregateInput_1.PermissionsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsSumOrderByAggregateInput_1.PermissionsSumOrderByAggregateInput)
], PermissionsOrderByWithAggregationInput.prototype, "_sum", void 0);
PermissionsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], PermissionsOrderByWithAggregationInput);
exports.PermissionsOrderByWithAggregationInput = PermissionsOrderByWithAggregationInput;
