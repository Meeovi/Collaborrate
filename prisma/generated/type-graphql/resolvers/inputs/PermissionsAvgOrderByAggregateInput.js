"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionsAvgOrderByAggregateInput = class PermissionsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsAvgOrderByAggregateInput.prototype, "id", void 0);
PermissionsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PermissionsAvgOrderByAggregateInput);
exports.PermissionsAvgOrderByAggregateInput = PermissionsAvgOrderByAggregateInput;
