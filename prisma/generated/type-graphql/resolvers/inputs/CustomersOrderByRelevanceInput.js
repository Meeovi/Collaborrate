"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByRelevanceFieldEnum_1 = require("../../enums/CustomersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomersOrderByRelevanceInput = class CustomersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersOrderByRelevanceFieldEnum_1.CustomersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersOrderByRelevanceInput.prototype, "search", void 0);
CustomersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersOrderByRelevanceInput", {
        isAbstract: true
    })
], CustomersOrderByRelevanceInput);
exports.CustomersOrderByRelevanceInput = CustomersOrderByRelevanceInput;
