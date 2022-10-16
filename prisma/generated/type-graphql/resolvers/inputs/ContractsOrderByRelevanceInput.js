"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsOrderByRelevanceFieldEnum_1 = require("../../enums/ContractsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ContractsOrderByRelevanceInput = class ContractsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsOrderByRelevanceFieldEnum_1.ContractsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ContractsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ContractsOrderByRelevanceInput.prototype, "search", void 0);
ContractsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ContractsOrderByRelevanceInput", {
        isAbstract: true
    })
], ContractsOrderByRelevanceInput);
exports.ContractsOrderByRelevanceInput = ContractsOrderByRelevanceInput;
