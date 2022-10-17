"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Tax_ruleOrderByWithRelationAndSearchRelevanceInput");
const Tax_ruleWhereInput_1 = require("../../../inputs/Tax_ruleWhereInput");
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let AggregateTax_ruleArgs = class AggregateTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], AggregateTax_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleOrderByWithRelationAndSearchRelevanceInput_1.Tax_ruleOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTax_ruleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], AggregateTax_ruleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTax_ruleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTax_ruleArgs.prototype, "skip", void 0);
AggregateTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTax_ruleArgs);
exports.AggregateTax_ruleArgs = AggregateTax_ruleArgs;
