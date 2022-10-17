"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ImportmOrderByWithRelationAndSearchRelevanceInput");
const ImportmWhereInput_1 = require("../../../inputs/ImportmWhereInput");
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
const ImportmScalarFieldEnum_1 = require("../../../../enums/ImportmScalarFieldEnum");
let FindFirstImportmArgs = class FindFirstImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereInput_1.ImportmWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereInput_1.ImportmWhereInput)
], FindFirstImportmArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmOrderByWithRelationAndSearchRelevanceInput_1.ImportmOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstImportmArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], FindFirstImportmArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstImportmArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstImportmArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmScalarFieldEnum_1.ImportmScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstImportmArgs.prototype, "distinct", void 0);
FindFirstImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstImportmArgs);
exports.FindFirstImportmArgs = FindFirstImportmArgs;
