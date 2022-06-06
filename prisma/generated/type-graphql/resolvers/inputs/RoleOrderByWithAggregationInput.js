"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleAvgOrderByAggregateInput_1 = require("../inputs/RoleAvgOrderByAggregateInput");
const RoleCountOrderByAggregateInput_1 = require("../inputs/RoleCountOrderByAggregateInput");
const RoleMaxOrderByAggregateInput_1 = require("../inputs/RoleMaxOrderByAggregateInput");
const RoleMinOrderByAggregateInput_1 = require("../inputs/RoleMinOrderByAggregateInput");
const RoleSumOrderByAggregateInput_1 = require("../inputs/RoleSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RoleOrderByWithAggregationInput = class RoleOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleOrderByWithAggregationInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCountOrderByAggregateInput_1.RoleCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCountOrderByAggregateInput_1.RoleCountOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleAvgOrderByAggregateInput_1.RoleAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleAvgOrderByAggregateInput_1.RoleAvgOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMaxOrderByAggregateInput_1.RoleMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMaxOrderByAggregateInput_1.RoleMaxOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleMinOrderByAggregateInput_1.RoleMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleMinOrderByAggregateInput_1.RoleMinOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleSumOrderByAggregateInput_1.RoleSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleSumOrderByAggregateInput_1.RoleSumOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_sum", void 0);
RoleOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleOrderByWithAggregationInput", {
        isAbstract: true
    })
], RoleOrderByWithAggregationInput);
exports.RoleOrderByWithAggregationInput = RoleOrderByWithAggregationInput;
