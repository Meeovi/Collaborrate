"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Tax_categoryOrderByWithRelationAndSearchRelevanceInput");
const Tax_categoryWhereInput_1 = require("../../../inputs/Tax_categoryWhereInput");
const Tax_categoryWhereUniqueInput_1 = require("../../../inputs/Tax_categoryWhereUniqueInput");
let AggregateTax_categoryArgs = class AggregateTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereInput_1.Tax_categoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereInput_1.Tax_categoryWhereInput)
], AggregateTax_categoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryOrderByWithRelationAndSearchRelevanceInput_1.Tax_categoryOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTax_categoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput)
], AggregateTax_categoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTax_categoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTax_categoryArgs.prototype, "skip", void 0);
AggregateTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTax_categoryArgs);
exports.AggregateTax_categoryArgs = AggregateTax_categoryArgs;
