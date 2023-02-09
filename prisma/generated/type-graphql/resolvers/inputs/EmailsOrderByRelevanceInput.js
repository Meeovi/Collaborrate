"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsOrderByRelevanceFieldEnum_1 = require("../../enums/EmailsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let EmailsOrderByRelevanceInput = class EmailsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsOrderByRelevanceFieldEnum_1.EmailsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailsOrderByRelevanceInput.prototype, "search", void 0);
EmailsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsOrderByRelevanceInput", {
        isAbstract: true
    })
], EmailsOrderByRelevanceInput);
exports.EmailsOrderByRelevanceInput = EmailsOrderByRelevanceInput;
