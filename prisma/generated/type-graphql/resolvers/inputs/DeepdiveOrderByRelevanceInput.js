"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveOrderByRelevanceFieldEnum_1 = require("../../enums/DeepdiveOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DeepdiveOrderByRelevanceInput = class DeepdiveOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DeepdiveOrderByRelevanceFieldEnum_1.DeepdiveOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DeepdiveOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByRelevanceInput.prototype, "search", void 0);
DeepdiveOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DeepdiveOrderByRelevanceInput", {
        isAbstract: true
    })
], DeepdiveOrderByRelevanceInput);
exports.DeepdiveOrderByRelevanceInput = DeepdiveOrderByRelevanceInput;
