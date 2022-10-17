"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/DigiboardOrderByWithRelationAndSearchRelevanceInput");
const DigiboardWhereInput_1 = require("../../../inputs/DigiboardWhereInput");
const DigiboardWhereUniqueInput_1 = require("../../../inputs/DigiboardWhereUniqueInput");
const DigiboardScalarFieldEnum_1 = require("../../../../enums/DigiboardScalarFieldEnum");
let FindManyDigiboardArgs = class FindManyDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereInput_1.DigiboardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereInput_1.DigiboardWhereInput)
], FindManyDigiboardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardOrderByWithRelationAndSearchRelevanceInput_1.DigiboardOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDigiboardArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput)
], FindManyDigiboardArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDigiboardArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDigiboardArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardScalarFieldEnum_1.DigiboardScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDigiboardArgs.prototype, "distinct", void 0);
FindManyDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyDigiboardArgs);
exports.FindManyDigiboardArgs = FindManyDigiboardArgs;
