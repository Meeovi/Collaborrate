"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Gift_certificatesAvgOrderByAggregateInput = class Gift_certificatesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesAvgOrderByAggregateInput.prototype, "id", void 0);
Gift_certificatesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Gift_certificatesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Gift_certificatesAvgOrderByAggregateInput);
exports.Gift_certificatesAvgOrderByAggregateInput = Gift_certificatesAvgOrderByAggregateInput;
