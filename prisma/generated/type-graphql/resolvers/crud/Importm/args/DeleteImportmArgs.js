"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteImportmArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmWhereUniqueInput_1 = require("../../../inputs/ImportmWhereUniqueInput");
let DeleteImportmArgs = class DeleteImportmArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmWhereUniqueInput_1.ImportmWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ImportmWhereUniqueInput_1.ImportmWhereUniqueInput)
], DeleteImportmArgs.prototype, "where", void 0);
DeleteImportmArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteImportmArgs);
exports.DeleteImportmArgs = DeleteImportmArgs;
