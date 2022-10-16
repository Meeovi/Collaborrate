"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByRelevanceFieldEnum_1 = require("../../enums/Customer_groupOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupOrderByRelevanceInput = class Customer_groupOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupOrderByRelevanceFieldEnum_1.Customer_groupOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByRelevanceInput.prototype, "search", void 0);
Customer_groupOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupOrderByRelevanceInput", {
        isAbstract: true
    })
], Customer_groupOrderByRelevanceInput);
exports.Customer_groupOrderByRelevanceInput = Customer_groupOrderByRelevanceInput;
