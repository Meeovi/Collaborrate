"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleWhereInput_1 = require("../inputs/Tax_ruleWhereInput");
let Tax_ruleListRelationFilter = class Tax_ruleListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], Tax_ruleListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], Tax_ruleListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], Tax_ruleListRelationFilter.prototype, "none", void 0);
Tax_ruleListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleListRelationFilter", {
        isAbstract: true
    })
], Tax_ruleListRelationFilter);
exports.Tax_ruleListRelationFilter = Tax_ruleListRelationFilter;
