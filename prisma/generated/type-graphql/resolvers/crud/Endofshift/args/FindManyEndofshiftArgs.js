"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/EndofshiftOrderByWithRelationAndSearchRelevanceInput");
const EndofshiftWhereInput_1 = require("../../../inputs/EndofshiftWhereInput");
const EndofshiftWhereUniqueInput_1 = require("../../../inputs/EndofshiftWhereUniqueInput");
const EndofshiftScalarFieldEnum_1 = require("../../../../enums/EndofshiftScalarFieldEnum");
let FindManyEndofshiftArgs = class FindManyEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereInput_1.EndofshiftWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereInput_1.EndofshiftWhereInput)
], FindManyEndofshiftArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EndofshiftOrderByWithRelationAndSearchRelevanceInput_1.EndofshiftOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEndofshiftArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput)
], FindManyEndofshiftArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEndofshiftArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEndofshiftArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EndofshiftScalarFieldEnum_1.EndofshiftScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEndofshiftArgs.prototype, "distinct", void 0);
FindManyEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyEndofshiftArgs);
exports.FindManyEndofshiftArgs = FindManyEndofshiftArgs;
