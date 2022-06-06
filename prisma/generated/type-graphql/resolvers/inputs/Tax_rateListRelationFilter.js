"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateWhereInput_1 = require("../inputs/Tax_rateWhereInput");
let Tax_rateListRelationFilter = class Tax_rateListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], Tax_rateListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], Tax_rateListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], Tax_rateListRelationFilter.prototype, "none", void 0);
Tax_rateListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateListRelationFilter", {
        isAbstract: true
    })
], Tax_rateListRelationFilter);
exports.Tax_rateListRelationFilter = Tax_rateListRelationFilter;
