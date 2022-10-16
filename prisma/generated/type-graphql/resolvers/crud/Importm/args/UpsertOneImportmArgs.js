"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmCreateInput_1 = require("../../../inputs/ImportmCreateInput");
const ImportmUpdateInput_1 = require("../../../inputs/ImportmUpdateInput");
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
let UpsertOneImportmArgs = class UpsertOneImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], UpsertOneImportmArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmCreateInput_1.ImportmCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmCreateInput_1.ImportmCreateInput)
], UpsertOneImportmArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmUpdateInput_1.ImportmUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmUpdateInput_1.ImportmUpdateInput)
], UpsertOneImportmArgs.prototype, "update", void 0);
UpsertOneImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneImportmArgs);
exports.UpsertOneImportmArgs = UpsertOneImportmArgs;
