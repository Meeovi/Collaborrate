"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThemesAvgOrderByAggregateInput = class ThemesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesAvgOrderByAggregateInput.prototype, "website_id", void 0);
ThemesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ThemesAvgOrderByAggregateInput);
exports.ThemesAvgOrderByAggregateInput = ThemesAvgOrderByAggregateInput;
