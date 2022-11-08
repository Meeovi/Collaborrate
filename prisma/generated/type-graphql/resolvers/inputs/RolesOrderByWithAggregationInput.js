"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesAvgOrderByAggregateInput_1 = require("../inputs/RolesAvgOrderByAggregateInput");
const RolesCountOrderByAggregateInput_1 = require("../inputs/RolesCountOrderByAggregateInput");
const RolesMaxOrderByAggregateInput_1 = require("../inputs/RolesMaxOrderByAggregateInput");
const RolesMinOrderByAggregateInput_1 = require("../inputs/RolesMinOrderByAggregateInput");
const RolesSumOrderByAggregateInput_1 = require("../inputs/RolesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RolesOrderByWithAggregationInput = class RolesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithAggregationInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesCountOrderByAggregateInput_1.RolesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesCountOrderByAggregateInput_1.RolesCountOrderByAggregateInput)
], RolesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesAvgOrderByAggregateInput_1.RolesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesAvgOrderByAggregateInput_1.RolesAvgOrderByAggregateInput)
], RolesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesMaxOrderByAggregateInput_1.RolesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesMaxOrderByAggregateInput_1.RolesMaxOrderByAggregateInput)
], RolesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesMinOrderByAggregateInput_1.RolesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesMinOrderByAggregateInput_1.RolesMinOrderByAggregateInput)
], RolesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesSumOrderByAggregateInput_1.RolesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesSumOrderByAggregateInput_1.RolesSumOrderByAggregateInput)
], RolesOrderByWithAggregationInput.prototype, "_sum", void 0);
RolesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesOrderByWithAggregationInput", {
        isAbstract: true
    })
], RolesOrderByWithAggregationInput);
exports.RolesOrderByWithAggregationInput = RolesOrderByWithAggregationInput;
