"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmUpdateInput_1 = require("../../../inputs/ImportmUpdateInput");
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
let UpdateOneImportmArgs = class UpdateOneImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmUpdateInput_1.ImportmUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmUpdateInput_1.ImportmUpdateInput)
], UpdateOneImportmArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], UpdateOneImportmArgs.prototype, "where", void 0);
UpdateOneImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneImportmArgs);
exports.UpdateOneImportmArgs = UpdateOneImportmArgs;
