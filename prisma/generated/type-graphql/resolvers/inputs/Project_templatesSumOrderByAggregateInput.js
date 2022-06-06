"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Project_templatesSumOrderByAggregateInput = class Project_templatesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesSumOrderByAggregateInput.prototype, "id", void 0);
Project_templatesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Project_templatesSumOrderByAggregateInput);
exports.Project_templatesSumOrderByAggregateInput = Project_templatesSumOrderByAggregateInput;
