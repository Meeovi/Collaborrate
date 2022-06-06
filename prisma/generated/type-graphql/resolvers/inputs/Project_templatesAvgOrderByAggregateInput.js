"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Project_templatesAvgOrderByAggregateInput = class Project_templatesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesAvgOrderByAggregateInput.prototype, "id", void 0);
Project_templatesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Project_templatesAvgOrderByAggregateInput);
exports.Project_templatesAvgOrderByAggregateInput = Project_templatesAvgOrderByAggregateInput;
