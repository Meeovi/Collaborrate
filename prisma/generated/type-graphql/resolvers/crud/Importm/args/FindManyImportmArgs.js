"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmOrderByWithRelationInput_1 = require("../../../inputs/ImportmOrderByWithRelationInput");
const ImportmWhereInput_1 = require("../../../inputs/ImportmWhereInput");
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
const ImportmScalarFieldEnum_1 = require("../../../../enums/ImportmScalarFieldEnum");
let FindManyImportmArgs = class FindManyImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereInput_1.ImportmWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereInput_1.ImportmWhereInput)
], FindManyImportmArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmOrderByWithRelationInput_1.ImportmOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyImportmArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], FindManyImportmArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyImportmArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyImportmArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ImportmScalarFieldEnum_1.ImportmScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyImportmArgs.prototype, "distinct", void 0);
FindManyImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyImportmArgs);
exports.FindManyImportmArgs = FindManyImportmArgs;
