"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCountriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesOrderByWithRelationInput_1 = require("../../../inputs/CountriesOrderByWithRelationInput");
const CountriesWhereInput_1 = require("../../../inputs/CountriesWhereInput");
const CountriesWhereUniqueInput_1 = require("../../../inputs/CountriesWhereUniqueInput");
const CountriesScalarFieldEnum_1 = require("../../../../enums/CountriesScalarFieldEnum");
let FindFirstCountriesArgs = class FindFirstCountriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereInput_1.CountriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesWhereInput_1.CountriesWhereInput)
], FindFirstCountriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesOrderByWithRelationInput_1.CountriesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCountriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesWhereUniqueInput_1.CountriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesWhereUniqueInput_1.CountriesWhereUniqueInput)
], FindFirstCountriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCountriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCountriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesScalarFieldEnum_1.CountriesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCountriesArgs.prototype, "distinct", void 0);
FindFirstCountriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCountriesArgs);
exports.FindFirstCountriesArgs = FindFirstCountriesArgs;
