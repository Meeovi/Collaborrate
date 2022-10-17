"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/DigiboardOrderByWithRelationAndSearchRelevanceInput");
const DigiboardWhereInput_1 = require("../../../inputs/DigiboardWhereInput");
const DigiboardWhereUniqueInput_1 = require("../../../inputs/DigiboardWhereUniqueInput");
const DigiboardScalarFieldEnum_1 = require("../../../../enums/DigiboardScalarFieldEnum");
let FindFirstDigiboardArgs = class FindFirstDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereInput_1.DigiboardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereInput_1.DigiboardWhereInput)
], FindFirstDigiboardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardOrderByWithRelationAndSearchRelevanceInput_1.DigiboardOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDigiboardArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput)
], FindFirstDigiboardArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDigiboardArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDigiboardArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardScalarFieldEnum_1.DigiboardScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDigiboardArgs.prototype, "distinct", void 0);
FindFirstDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDigiboardArgs);
exports.FindFirstDigiboardArgs = FindFirstDigiboardArgs;
