"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TrainingsOrderByRelevanceFieldEnum_1 = require("../../enums/TrainingsOrderByRelevanceFieldEnum");
let TrainingsOrderByRelevanceInput = class TrainingsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsOrderByRelevanceFieldEnum_1.TrainingsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TrainingsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TrainingsOrderByRelevanceInput.prototype, "search", void 0);
TrainingsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TrainingsOrderByRelevanceInput", {
        isAbstract: true
    })
], TrainingsOrderByRelevanceInput);
exports.TrainingsOrderByRelevanceInput = TrainingsOrderByRelevanceInput;
