"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Tax_rateOrderByWithRelationAndSearchRelevanceInput");
const Tax_rateWhereInput_1 = require("../../../inputs/Tax_rateWhereInput");
const Tax_rateWhereUniqueInput_1 = require("../../../inputs/Tax_rateWhereUniqueInput");
let AggregateTax_rateArgs = class AggregateTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], AggregateTax_rateArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateOrderByWithRelationAndSearchRelevanceInput_1.Tax_rateOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTax_rateArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], AggregateTax_rateArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTax_rateArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTax_rateArgs.prototype, "skip", void 0);
AggregateTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTax_rateArgs);
exports.AggregateTax_rateArgs = AggregateTax_rateArgs;
