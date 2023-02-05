"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInOrderByRelevanceFieldEnum_1 = require("../../enums/LogInOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let LogInOrderByRelevanceInput = class LogInOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInOrderByRelevanceFieldEnum_1.LogInOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LogInOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LogInOrderByRelevanceInput.prototype, "search", void 0);
LogInOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LogInOrderByRelevanceInput", {
        isAbstract: true
    })
], LogInOrderByRelevanceInput);
exports.LogInOrderByRelevanceInput = LogInOrderByRelevanceInput;
