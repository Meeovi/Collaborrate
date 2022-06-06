"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmUpdateInput_1 = require("../../../inputs/ImportmUpdateInput");
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
let UpdateImportmArgs = class UpdateImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmUpdateInput_1.ImportmUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmUpdateInput_1.ImportmUpdateInput)
], UpdateImportmArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], UpdateImportmArgs.prototype, "where", void 0);
UpdateImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateImportmArgs);
exports.UpdateImportmArgs = UpdateImportmArgs;
